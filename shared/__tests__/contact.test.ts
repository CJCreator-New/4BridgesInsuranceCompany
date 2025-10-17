import { describe, it, expect } from 'vitest';
import { contactFormSchema } from '../contact';

describe('Contact Form Validation', () => {
  it('validates correct form data', () => {
    const validData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '555-1234',
      subject: 'life-insurance',
      message: 'I need information about life insurance',
    };

    const result = contactFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('rejects invalid email', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'invalid-email',
      subject: 'life-insurance',
      message: 'Test message',
    };

    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('rejects short name', () => {
    const invalidData = {
      name: 'J',
      email: 'john@example.com',
      subject: 'life-insurance',
      message: 'Test message',
    };

    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('rejects short message', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'life-insurance',
      message: 'Short',
    };

    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('allows optional phone field', () => {
    const validData = {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'life-insurance',
      message: 'I need information',
    };

    const result = contactFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });
});
