export default function PageTitle({children, className}: {children:Readonly<React.ReactNode>, className?:string}) {
    return (
        <h1 className={`${className} text-3xl flex`}>{children}</h1>
    )
}