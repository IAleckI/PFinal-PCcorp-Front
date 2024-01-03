import { z } from "zod";

export const loginSchema = z.object({
    email: z.string()
        .min(3, 'Email is required')
        .email('Invalid email'),
    password: z.string('Passowrd incorrect')
        .min(8, 'Password is required')
})

export const registerSchema = z.object({
    userName: z.string()
        .min(3, 'User name is required')
        .max(20, 'User name is too long'),
    email: z.string()
        .min(3, 'Email is required')
        .email('Invalid email'),
    password: z.string('Passowrd incorrect')
        .min(8, 'Password is required')
        .max(20, 'Password is too long'),
    repeatPassword: z.string()
}).refine((data) => data.password === data.repeatPassword, {
    message: 'Passwords do not match',
    path: ['repeatPassword']
})