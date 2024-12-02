export default function FormGroup({label, children, className}:{
    readonly label:string, 
    readonly children:React.ReactNode,
    readonly className?:string
}) {
    return (
        <div className={className}>
            <label>{label}</label>
            {children}
        </div>
    )
}