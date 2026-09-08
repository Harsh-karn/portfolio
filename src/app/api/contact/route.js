import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Configure your nodemailer transport here. 
    // Usually you'd use environment variables like process.env.EMAIL_USER and process.env.EMAIL_PASS
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or another service
      auth: {
        user: process.env.EMAIL_USER || 'placeholder@gmail.com',
        pass: process.env.EMAIL_PASS || 'placeholder_pass',
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send it to yourself
      subject: `New Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // If environment variables aren't set, we simulate success for demo purposes
    if (!process.env.EMAIL_USER) {
      console.log('Simulating email send since EMAIL_USER is not set:', mailOptions);
      return NextResponse.json({ success: true, simulated: true });
    }

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
