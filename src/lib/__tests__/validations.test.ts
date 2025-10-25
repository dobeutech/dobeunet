import { describe, it, expect } from 'vitest';
import {
  contactFormSchema,
  signInSchema,
  signUpSchema,
  adminLoginSchema,
  newsletterSchema,
} from '../validations';

describe('Validation Schemas', () => {
  describe('contactFormSchema', () => {
    it('should validate correct contact form data', () => {
      const validData = {
        name: 'John Doe',
        email: 'john@example.com',
        subject: 'Test Subject',
        message: 'This is a test message with enough characters.',
      };

      const result = contactFormSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject name with less than 2 characters', () => {
      const invalidData = {
        name: 'J',
        email: 'john@example.com',
        subject: 'Test',
        message: 'This is a test message.',
      };

      const result = contactFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('should reject invalid email', () => {
      const invalidData = {
        name: 'John Doe',
        email: 'invalid-email',
        subject: 'Test',
        message: 'This is a test message.',
      };

      const result = contactFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('should reject message with less than 10 characters', () => {
      const invalidData = {
        name: 'John Doe',
        email: 'john@example.com',
        subject: 'Test',
        message: 'Short',
      };

      const result = contactFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });

  describe('signInSchema', () => {
    it('should validate correct sign in data', () => {
      const validData = {
        email: 'user@example.com',
        password: 'password123',
      };

      const result = signInSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject invalid email', () => {
      const invalidData = {
        email: 'not-an-email',
        password: 'password123',
      };

      const result = signInSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('should reject password with less than 6 characters', () => {
      const invalidData = {
        email: 'user@example.com',
        password: '12345',
      };

      const result = signInSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });

  describe('signUpSchema', () => {
    it('should validate correct sign up data', () => {
      const validData = {
        email: 'user@example.com',
        password: 'Password123',
        confirmPassword: 'Password123',
      };

      const result = signUpSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject password without uppercase letter', () => {
      const invalidData = {
        email: 'user@example.com',
        password: 'password123',
        confirmPassword: 'password123',
      };

      const result = signUpSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('should reject mismatched passwords', () => {
      const invalidData = {
        email: 'user@example.com',
        password: 'Password123',
        confirmPassword: 'Password456',
      };

      const result = signUpSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].path).toContain('confirmPassword');
      }
    });
  });

  describe('adminLoginSchema', () => {
    it('should validate correct admin login data', () => {
      const validData = {
        email: 'admin@example.com',
        password: 'admin123',
      };

      const result = adminLoginSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject empty password', () => {
      const invalidData = {
        email: 'admin@example.com',
        password: '',
      };

      const result = adminLoginSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });

  describe('newsletterSchema', () => {
    it('should validate correct email', () => {
      const validData = {
        email: 'subscriber@example.com',
      };

      const result = newsletterSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject invalid email', () => {
      const invalidData = {
        email: 'not-valid',
      };

      const result = newsletterSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });
});
