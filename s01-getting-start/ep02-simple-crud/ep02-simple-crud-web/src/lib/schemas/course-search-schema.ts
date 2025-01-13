import z from "zod"

export const courseSearchSchema = z.object({
    level: z.string().optional(),
    keyword : z.string().optional()
})

export type CourseSearch = z.infer<typeof courseSearchSchema>