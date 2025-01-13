import z from "zod"

export const courseFormSchema = z.object({
    name: z.string({message: "Please enter course name."}).nonempty({message: "Please enter course name."}),
    level: z.enum(["Basic", "Intermediate", "Advance"], {required_error: "Please select course level."}),
    fees: z.string({required_error: "Please enter course fees."})
        .refine(data => !isNaN(parseInt(data)), {message: "Please enter valid number."}),
    description: z.string().optional()
})

export type CourseForm = z.infer<typeof courseFormSchema>