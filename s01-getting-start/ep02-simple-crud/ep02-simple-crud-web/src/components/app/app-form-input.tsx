import { Control, FieldValues, Path } from "react-hook-form";
import { FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";

export default function AppFormInput<T extends FieldValues = FieldValues>({
    control,
    name,
    label,
    placeholder,
    className,
    type = "text",
    ...props
}: AppFormInputModel<T>) {
    return (
        <FormField control={control} name={name} render={({ field }) => (
            <FormItem className={className}>
                <FormLabel>{label}</FormLabel>
                <Input type={type} placeholder={placeholder} {...field} {...props} />
            </FormItem>
        )} />
    )
}

type AppFormInputModel<T extends FieldValues = FieldValues> = {
    control?: Control<T, any>,
    name: Path<T>,
    label: string,
    placeholder?: string,
    className?: string,
    type?: string,
    [key: string]: any
}