import { z } from 'zod';

// Contact Form Validation Schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must not exceed 255 characters'),
  subject: z
    .string()
    .min(3, 'Subject must be at least 3 characters')
    .max(200, 'Subject must not exceed 200 characters')
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must not exceed 2000 characters')
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Booking Form Validation Schema
export const bookingFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must not exceed 255 characters'),
  consultationType: z.enum(
    ['supply_chain', 'it_consulting', 'marketing', 'networking', 'quick_qa'],
    { required_error: 'Please select a consultation type' }
  ),
  preferredDate: z
    .date({ required_error: 'Please select a preferred date' })
    .min(new Date(), 'Date must be in the future'),
  preferredTime: z
    .string()
    .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Please enter a valid time'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must not exceed 1000 characters')
    .optional()
    .or(z.literal(''))
});

export type BookingFormData = z.infer<typeof bookingFormSchema>;

// Auth Form Validation Schemas
export const signInSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
});

export type SignInData = z.infer<typeof signInSchema>;

export const signUpSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword']
});

export type SignUpData = z.infer<typeof signUpSchema>;

// Admin Login Validation Schema
export const adminLoginSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address'),
  password: z
    .string()
    .min(1, 'Password is required')
});

export type AdminLoginData = z.infer<typeof adminLoginSchema>;

// Newsletter Validation Schema
export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
});

export type NewsletterData = z.infer<typeof newsletterSchema>;

// Premium Chat Message Validation Schema
export const premiumChatSchema = z.object({
  subject: z
    .string()
    .min(3, 'Subject must be at least 3 characters')
    .max(200, 'Subject must not exceed 200 characters'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must not exceed 1000 characters'),
  priority: z.enum(['low', 'medium', 'high']).default('medium')
});

export type PremiumChatData = z.infer<typeof premiumChatSchema>;
