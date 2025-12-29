import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { name, email, business, message } = await request.json();

        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
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

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
