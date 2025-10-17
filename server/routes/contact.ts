import { RequestHandler } from "express";
import { contactFormSchema, ContactResponse } from "../../shared/contact";

export const handleContactForm: RequestHandler = async (req, res) => {
  try {
    const validatedData = contactFormSchema.parse(req.body);
    
    // Log the contact form submission
    console.log('Contact form submission:', {
      name: validatedData.name,
      email: validatedData.email,
      subject: validatedData.subject,
      timestamp: new Date().toISOString(),
    });

    // In production, you would:
    // 1. Send email using nodemailer or similar
    // 2. Save to database
    // 3. Send to CRM system
    
    const response: ContactResponse = {
      success: true,
      message: 'Thank you for contacting us! We will get back to you within 24 hours.',
    };

    res.json(response);
  } catch (error) {
    console.error('Contact form error:', error);
    
    const response: ContactResponse = {
      success: false,
      message: 'There was an error submitting your form. Please try again or call us directly.',
    };

    res.status(400).json(response);
  }
};
