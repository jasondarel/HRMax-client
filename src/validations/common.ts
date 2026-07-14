import { z } from 'zod';

export const charOnly = (message = 'Cannot contain numbers') => 
  z.string().regex(/^[^0-9]*$/, message);

export const numOnly = (message = 'Must contain only digits') => 
  z.string().regex(/^\d+$/, message);

export const alphaNum = (message = 'Must contain only letters and numbers') => 
  z.string().regex(/^[a-zA-Z0-9]+$/, message);

export const strongPassword = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number');

export const emailValidation = z
  .string()
  .min(1, 'Email is required')
  .email('Invalid email address');
