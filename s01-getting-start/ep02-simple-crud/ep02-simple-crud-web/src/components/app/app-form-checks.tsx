import { Control, FieldValues, Path } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form"
import { Checkbox } from "../ui/checkbox"

export function AppFormChecks<T extends FieldValues = FieldValues>({
    control, 
    name, 
    label, 
    items,
    className
} : AppFormChecksModel<T>) {
    return (
        <FormField control={control} name={name} render={() => (
            <FormItem className={className}>
                <FormLabel>{label}</FormLabel>
                <div className="flex gap-8 items-centerflex ">
                    {items.map((item, index) => typeof item === 'string' 
                        ? <StringValueCheckBox key={index} control={control} name={name} item={item} />
                        : <ObjectValueCheckBox key={index} control={control} name={name} item={item} />
                    )}
                </div>
            </FormItem>
        )} />
    )
}

function StringValueCheckBox<T extends FieldValues = FieldValues>({control, name, item} : StringValueCheckBoxModel<T>) {
    return (
        <FormField control={control} name={name} render={({field}) => (
            <FormItem className="flex gap-2 items-centerflex flex-row items-start space-x-2 space-y-0">
                <FormControl>
                    <Checkbox 
                        checked={field.value?.includes(item)} 
                        onCheckedChange={checked => checked 
                            ? field.onChange([...field.value, item]) 
                            : field.onChange([...field.value].filter(a => a !== item))   
                        }/>
                </FormControl>
                <FormLabel>{item}</FormLabel>
            </FormItem>
        )} />
    )
}

type StringValueCheckBoxModel<T extends FieldValues = FieldValues> = {
    control?: Control<T, any>,
    name: Path<T>,
    item: string
}

function ObjectValueCheckBox<T extends FieldValues = FieldValues>({control, name, item} : ObjectValueCheckBoxModel<T>) {
    return (
        <FormField control={control} name={name} render={({field}) => (
            <FormItem className="flex gap-2 items-centerflex flex-row items-start space-x-2 space-y-0">
                <FormControl>
                    <Checkbox 
                        checked={field.value?.includes(item.value)} 
                        onCheckedChange={checked => checked 
                            ? field.onChange([...field.value, item.value]) 
                            : field.onChange([...field.value].filter(a => a !== item.value))   
                        }/>
                </FormControl>
                <FormLabel>{item.label}</FormLabel>
            </FormItem>
        )} />
    )    
}

type ObjectValueCheckBoxModel<T extends FieldValues = FieldValues> = {
    control?: Control<T, any>,
    name: Path<T>,
    item: {
        value: string 
        label: string
    }
}

type AppFormChecksModel<T extends FieldValues = FieldValues> = {
    control?: Control<T, any>,
    name: Path<T>,
    label: string,
    items: AppFormChecksItemModel[],
    className? : string
}

type AppFormChecksItemModel = {
    value: string 
    label: string
} | string

