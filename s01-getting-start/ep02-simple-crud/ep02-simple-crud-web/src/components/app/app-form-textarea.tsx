import { FieldValues, Control, Path } from "react-hook-form"
import { FormField, FormItem, FormLabel } from "../ui/form"
import { Textarea } from "../ui/textarea"

export default function AppFormTextarea<T extends FieldValues = FieldValues>({
    control,
    name,
    label,
    placeholder,
    className,
    ...props
}: AppFormTextareaModel<T>) {
    return (
        <FormField control={control} name={name} render={({ field }) => (
            <FormItem className={className}>
                <FormLabel>{label}</FormLabel>
                <Textarea placeholder={placeholder} {...field} {...props} />
            </FormItem>
        )} />
    )
}

type AppFormTextareaModel<T extends FieldValues = FieldValues> = {
    control?: Control<T, any>,
    name: Path<T>,
    label: string,
    placeholder?: string,
    className?: string,
    [key: string]: any
}