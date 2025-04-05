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
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

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
      return res.status(500).json({ error: 'Failed to submit message' });
    }

    return res.status(200).json({ success: true, message: 'Message submitted successfully' });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
