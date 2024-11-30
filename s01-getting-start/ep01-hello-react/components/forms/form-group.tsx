export default function FormGroup({label, children}:{readonly label:string, readonly children:React.ReactNode}) {
    return (
        <div>
            <label>{label}</label>
            {children}
        </div>
    )
}