import z from "zod"

export const courseSearchSchema = z.object({
    level: z.string().optional(),
    keyword : z.string().optional()
})
