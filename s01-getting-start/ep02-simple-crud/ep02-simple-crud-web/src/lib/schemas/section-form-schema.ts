import z from 'zod'

export const sectionFormSchema = z.object({
    courseId: z.number({message: "Please select course."}),
    startAt: z.string({message: "Please select start date."}),
    startTime: z.string({message: "Please select start time."}),
    endTime: z.string({message: "Please select end time."}),
    type: z.enum(["Campus", "Online"], {required_error: "Please select class type."}),
    fees: z.string({required_error: "Please enter fees."})
        .refine(data => !isNaN(parseInt(data)), {message: "Please enter valid number."}),
    months: z.string({required_error: "Please enter months."})
        .refine(data => !isNaN(parseInt(data)), {message: "Please enter valid number."}),
    days: z.array(z.string()).nonempty({message: "Please select days."})
})

export type SectionForm = z.infer<typeof sectionFormSchema>