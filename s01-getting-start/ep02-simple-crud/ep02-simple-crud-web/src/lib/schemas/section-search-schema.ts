import z from "zod"

export const sectionSearchSchema = z.object({
    level: z.string().optional(),
    type: z.string().optional(),
    startFrom: z.string().optional(),
    startTo: z.string().optional(),
    keyword: z.string().optional()
})

export type SectionSearch = z.infer<typeof sectionSearchSchema>