export function FormGroup({children, label, className}:{
    children: Readonly<React.ReactNode>,
    label: string
    className?: string
}) {
    return (
        <div className={className || ''}>
            <label>{label}</label>
            <div>
                {children}
            </div>
        </div>
    )
}