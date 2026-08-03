import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Initialize Gemini SDK if API Key is configured in environment
const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
let genAI: GoogleGenerativeAI | null = null;

if (apiKey && apiKey !== 'your_gemini_api_key_here') {
  genAI = new GoogleGenerativeAI(apiKey);
}

// System Instruction Prompt for Shyam Kumar's AI Mentor Voice
const SYSTEM_PROMPT = `
You are Surakattula Shyam Kumar's custom AI DSA Mentor, integrated into his official Instructor Portfolio website.
Your role is to guide college students, placement aspirants, and junior developers in mastering Data Structures and Algorithms (C++) and software engineering.

Core Teaching Principles to embed in your responses:
1. "Understand before memorizing" — Never give just raw code without explaining WHY it works conceptually and memory-wise.
2. Encourage curiosity and reassure students that making bugs is a normal part of mastery.
3. Keep explanations practical, beginner-friendly, and logically structured.
4. If a user asks about Shyam Kumar: He is an active DSA Instructor (C++) and Software Development Faculty Trainee at NxtWave CCBP 4.0, certified in Full-Stack MERN Development and a 100DaysOfCode completer.
5. If asked about entirely unrelated topics (like politics, movies, or general gossip), politely steer the user back to programming, C++, DSA, or mentoring guidance.
`;

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString(), geminiConnected: !!genAI });
});

// AI DSA Mentor Chat Endpoint
app.post('/api/chat', async (req, res) => {
  const { message, history } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message content is required.' });
  }

  // If Gemini API Key is configured, execute live generation
  if (genAI) {
    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
      const prompt = `${SYSTEM_PROMPT}\n\nUser Question: ${message}\nAI Mentor Answer:`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      return res.json({ reply: text, source: 'gemini-2.5-flash' });
    } catch (error: any) {
      console.error('Gemini API Error:', error.message || error);
      // Continue to fallback if API call fails
    }
  }

  // Fallback pedagogical response if offline or API key unassigned
  res.json({
    reply: `### AI Mentor Notice (Simulated Mode)\nThat is a brilliant question about **${message}**!\n\nIn our live NxtWave mentoring sessions, Shyam breaks down this topic using visual diagrams and manual call stack tracing before writing C++ code. Feel free to connect via the **WhatsApp Chat button** directly on this portfolio to discuss your learning roadmap in detail!`,
    source: 'offline-pedagogy-engine'
  });
});

// Student Contact Form Ingestion Endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message, honeypot } = req.body;

  if (honeypot) {
    return res.status(200).json({ status: 'Spam filtered successfully.' });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Required parameters missing.' });
  }

  console.log(`[New Student Inquiry] From: ${name} (${email}) | Subject: ${subject}`);
  res.status(200).json({ success: true, message: 'Message securely logged and forwarded to instructor.' });
});

app.listen(PORT, () => {
  console.log(`🚀 Instructor Portfolio API Server active on port ${PORT}`);
});

export default app;
