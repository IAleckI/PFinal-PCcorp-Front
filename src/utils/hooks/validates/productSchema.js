import { z } from "zod";

export const productSchema = z.object({
    name: z.string().min(3, 'Name is required'),
    model: z.string().min(3, 'Model is required'),
    family: z.string().min(3, 'Family is required'),
    brand: z.string().min(3, 'Brand is required'),
    stock: z.number().min(1, 'Stock is required'),
    price: z.number().min(1, 'Price is required'),
    imagen: z.string().min(1),
})
