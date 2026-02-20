import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const companyEmail = process.env.COMPANY_EMAIL;

  if (!resendApiKey || !companyEmail) {
    return NextResponse.json(
      { success: false, error: 'Email service is not configured.' },
      { status: 500 }
    );
  }

  const { Resend } = await import('resend');
  const resend = new Resend(resendApiKey);
  const body = await req.json();

  const {
    wantedTech,
    firstName,
    lastName,
    email,
    company,
    budget,
    timeline,
    message,
    fileUrl,
  } = body;

  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: companyEmail,
      subject: `New Portfolio Submission from ${firstName} ${lastName}`,
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Wanted Tech:</strong> ${wantedTech}</p>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Message:</strong> ${message}</p>
        ${fileUrl ? `<p><strong>Attachment:</strong> <a href="${fileUrl}">View File</a></p>` : ''}
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}



// // src/app/api/send-email/route.ts
// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(req: Request) {
//   const body = await req.json();

//   const {
//     wantedTech,
//     firstName,
//     lastName,
//     email,
//     company,
//     budget,
//     timeline,
//     message,
//     fileUrl,
//   } = body;

//   const transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: Number(process.env.SMTP_PORT),
//     secure: false,
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASS,
//     },
//   });

//   try {
//     await transporter.sendMail({
//       from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
//       to: process.env.COMPANY_EMAIL,
//       subject: `New Portfolio Submission from ${firstName} ${lastName}`,
//       html: `
//         <h3>New Contact Request</h3>
//         <p><strong>Wanted Tech:</strong> ${wantedTech}</p>
//         <p><strong>Name:</strong> ${firstName} ${lastName}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Company:</strong> ${company}</p>
//         <p><strong>Budget:</strong> ${budget}</p>
//         <p><strong>Timeline:</strong> ${timeline}</p>
//         <p><strong>Message:</strong> ${message}</p>
//         ${fileUrl ? `<p><strong>Attachment:</strong> <a href="${fileUrl}" target="_blank">View File</a></p>` : ''}
//       `,
//     });

//     return NextResponse.json({ success: true, message: 'Email sent successfully' });
//   } catch (error) {
//     console.error("Email error:", error);
//     return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
//   }
// }
