import z from "zod"

export const courseSearchSchema = z.object({
    level: z.union([
        z.literal('Basic'),
        z.literal('Intermediate'),
        z.literal('Advance'),
    ]).optional(),
    keyword : z.string().optional()
})
