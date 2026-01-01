import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { name, email, business, message } = await request.json();

        console.log('Contact form submission received:', { name, email, business });

        if (!process.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY is not configured');
            return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        const result = await resend.emails.send({
            from: 'AckSites <noreply@mail.acksites.com>',
            to: 'hello@acksites.com',
            subject: `New inquiry from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Business:</strong> ${business || 'Not provided'}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
            replyTo: email,
        });

        console.log('Email sent successfully:', result);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
