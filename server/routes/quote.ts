import { RequestHandler } from "express";

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  insuranceType: string;
}

interface QuoteResponse {
  success: boolean;
  message: string;
}

export const handleQuoteForm: RequestHandler = async (req, res) => {
  try {
    const { name, email, phone, insuranceType }: QuoteFormData = req.body;

    // Basic validation
    if (!name || !email || !phone || !insuranceType) {
      const response: QuoteResponse = {
        success: false,
        message: 'All fields are required. Please fill out the complete form.',
      };
      return res.status(400).json(response);
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      const response: QuoteResponse = {
        success: false,
        message: 'Please enter a valid email address.',
      };
      return res.status(400).json(response);
    }

    // Phone validation (basic)
    const phoneRegex = /^\(?[\d\s\-\(\)]{10,}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      const response: QuoteResponse = {
        success: false,
        message: 'Please enter a valid phone number.',
      };
      return res.status(400).json(response);
    }

    // Log the quote form submission
    console.log('Quote form submission:', {
      name,
      email,
      phone,
      insuranceType,
      timestamp: new Date().toISOString(),
    });

    // In production, you would:
    // 1. Send email to sales team
    // 2. Save to CRM system
    // 3. Send confirmation email to customer
    // 4. Trigger lead nurturing workflow

    const response: QuoteResponse = {
      success: true,
      message: 'Thank you for your interest! Our insurance specialists will contact you within 24 hours with your personalized quote.',
    };

    res.json(response);
  } catch (error) {
    console.error('Quote form error:', error);

    const response: QuoteResponse = {
      success: false,
      message: 'There was an error processing your quote request. Please try again or call us at (555) 123-4567.',
    };

    res.status(500).json(response);
  }
};