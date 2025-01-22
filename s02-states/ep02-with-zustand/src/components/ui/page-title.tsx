export default function PageTitle({icon, title} : {
    icon : React.ReactNode,
    title : string
}) {
    return (
        <h1 className="text-2xl flex items-center gap-3">
            {icon} 
            <span>Zustand &gt; {title}</span>
        </h1>
    )
}