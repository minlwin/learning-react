export default function Card({children, className}:{readonly children:React.ReactNode, readonly className?:string}) {
    return (
        <div className={`${className ?? ""} p-4 drop-shadow-md bg-white rounded-md`}>
            {children}
        </div>
    )
}