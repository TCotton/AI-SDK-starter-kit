import { z } from 'zod'

export const EmailSchema = z.email('Invalid email')
export const PasswordSchema = z.string().min(12, 'Password must be at least 12 characters')
