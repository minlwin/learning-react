export default function Card({children, className}:{readonly children:React.ReactNode, readonly className?:string}) {
    return (
        <div className={`${className ?? ""} p-4 rounded-md border-2 border-solid border-red-800`}>
            {children}
        </div>
    )
}