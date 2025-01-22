import { Label } from "flowbite-react"

export default function FormGroup({label, className, children} : {
    label : string,
    className? : string,
    children : React.ReactNode
}) {
    return (
        <div className={className}>
            <Label>{label}</Label>
            <div>
                {children}
            </div>
        </div>
    )
}