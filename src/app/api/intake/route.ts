import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        const resend = new Resend(process.env.RESEND_API_KEY);

        const selectedPages = Object.entries(data.pages)
            .filter(([_, checked]) => checked)
            .map(([page]) => page.charAt(0).toUpperCase() + page.slice(1))
            .join(', ');

        await resend.emails.send({
            from: 'AckSites <noreply@mail.acksites.com>',
            to: 'hello@acksites.com',
            subject: `Intake Form: ${data.businessName}`,
            html: `
                <h2>New AckSites Intake Form Submission</h2>

                <p><strong>Business Name:</strong> ${data.businessName}</p>
                <p><strong>Contact Name:</strong> ${data.yourName}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>

                <h3>Business Description</h3>
                <p>${data.businessDescription}</p>

                <p><strong>Existing Website:</strong> ${data.hasWebsite}${data.websiteUrl ? ` - ${data.websiteUrl}` : ''}</p>

                <p><strong>Pages Needed:</strong> ${selectedPages}${data.otherPages ? ` (Other: ${data.otherPages})` : ''}</p>

                <p><strong>Has Logo:</strong> ${data.hasLogo}</p>
                <p><strong>Has Photos:</strong> ${data.hasPhotos}</p>

                <h3>Website Inspiration</h3>
                <p>${data.websiteInspiration || 'Not provided'}</p>

                <h3>Additional Notes</h3>
                <p>${data.additionalNotes || 'None'}</p>
            `,
            replyTo: data.email,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending intake email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
