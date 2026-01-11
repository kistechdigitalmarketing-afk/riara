import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Runtime configuration
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactSchema.parse(body);

    // In a production environment, you would:
    // 1. Send an email using a service like SendGrid, Resend, or Nodemailer
    // 2. Store the submission in a database
    // 3. Send a notification to the admin

    // For now, we'll simulate success
    // Example email sending (you would integrate with an email service):
    // await sendEmail({
    //   to: process.env.CONTACT_EMAIL,
    //   from: process.env.FROM_EMAIL,
    //   subject: `Contact Form: ${validatedData.subject}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${validatedData.name}</p>
    //     <p><strong>Email:</strong> ${validatedData.email}</p>
    //     <p><strong>Phone:</strong> ${validatedData.phone || 'N/A'}</p>
    //     <p><strong>Subject:</strong> ${validatedData.subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${validatedData.message}</p>
    //   `,
    // });

    // Log the submission (in production, remove this or use a proper logging service)
    console.log('Contact form submission:', validatedData);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message. We will get back to you soon.' 
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation error', 
          errors: error.errors 
        },
        { status: 400 }
      );
    }

    console.error('Error processing contact form:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'An error occurred while processing your request. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

