// File: api/contact.js - Vercel Serverless Function for Contact Form

import { createClient } from '@supabase/supabase-js';

export const config = {
  api: {
    bodyParser: true,
  },
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

if (!supabaseUrl || !supabaseServiceKey) {
    console.error("❌ Supabase environment variables not set");
    return res.status(500).json({ error: "Supabase not configured properly" });
  }
  

console.log("🔍 SUPABASE URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log("🔍 SUPABASE SERVICE KEY:", process.env.SUPABASE_SERVICE_ROLE_KEY);


export default async function handler(req, res) {
  // ✅ CORS headers (IMPORTANT: these must come before any return)
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*'); // ← In production, replace * with your actual frontend origin
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // ✅ Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const { error } = await supabase.from('contact_messages').insert([
      {
        name,
        email,
        subject,
        message,
        submitted_at: new Date(),
      },
    ]);

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Failed to submit message' });
    }

    return res.status(200).json({ success: true, message: 'Message submitted successfully' });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Server error occurred' });
  }
}
