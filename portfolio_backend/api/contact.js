// File: /api/contact.js
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Fail early if env vars are missing
if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error("❌ Supabase environment variables are missing");
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

module.exports = async function handler(req, res) {
  // CORS headers - Allow requests from any origin during development
  // For production, restrict this to your actual domain
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*'); // Or specify your exact frontend URL without trailing slash
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Ensure req.body is parsed properly
    let body;
    
    if (typeof req.body === 'string') {
      try {
        body = JSON.parse(req.body);
      } catch (e) {
        console.error("Failed to parse request body:", e);
        return res.status(400).json({ error: 'Invalid request body format' });
      }
    } else {
      body = req.body;
    }

    // Log received data to help debug
    console.log("Received data:", body);
    
    const { name, email, subject, message } = body;

    // Validate all required fields
    if (!name || !email || !subject || !message) {
      console.log("Missing fields:", { 
        name: !name, 
        email: !email, 
        subject: !subject, 
        message: !message 
      });
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Insert data into Supabase
    const { error } = await supabase.from('contact_messages').insert([
      {
        name,
        email,
        subject,
        message,
        submitted_at: new Date(),
      }
    ]);

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({ error: 'Failed to submit message to database' });
    }

    return res.status(200).json({ success: true, message: 'Message submitted successfully' });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};