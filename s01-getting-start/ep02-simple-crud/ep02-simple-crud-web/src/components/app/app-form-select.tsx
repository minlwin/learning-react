import { Control, FieldValues, Path } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export default function AppFormSelect<T extends FieldValues = FieldValues, >({
    control,
    name,
    lable,
    placeholder,
    className,
    items
}:AppFormSelectModel<T>) {
    return (
        <FormField control={control} name={name} 
            render={({field}) =>(
                <FormItem className={className}>
                    <FormLabel>{lable}</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value} >
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder={placeholder} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {items.map(item => typeof item === 'string' ? 
                                (
                                    <SelectItem key={item} value={item}>{item}</SelectItem>
                                ) : 
                                (
                                    <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>
                                )
                            )}
                        </SelectContent>
                    </Select>
                </FormItem>
            )} />
    )
}

type AppFormSelectModel<T extends FieldValues = FieldValues> = {
    control?: Control<T, any>,
    name: Path<T>,
    lable: string,
    placeholder?: string,
    className?: string,
    items: AppFormSelectItemModel[]
}

type AppFormSelectItemModel = {
    value: string 
    label: string
} | string
