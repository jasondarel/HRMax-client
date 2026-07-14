import { z } from 'zod';
import { charOnly, numOnly, strongPassword, emailValidation } from './common';

export const loginSchema = z.object({
  email: emailValidation,
  password: z.string().min(1, 'Password is required'),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const signupSchema = z.object({
  name: charOnly('Name cannot contain numbers').min(2, 'Name must be at least 2 characters'),
  email: emailValidation,
  password: strongPassword,
  confirmPassword: z.string().min(1, 'Confirm Password is required'),
  countryCode: z.string().min(1, 'Country code is required'),
  phone: numOnly('Phone number must contain only digits').min(1, 'Phone number is required'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export type SignupFormData = z.infer<typeof signupSchema>;
