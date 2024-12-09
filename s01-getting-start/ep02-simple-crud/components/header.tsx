export default function Header({icon, name}: Readonly<HeaderModel>) {
   return (
    <div className={`flex justify-start text-2xl`}>
        {icon ? icon : undefined} <div className="ms-2">{name}</div>
    </div>
   ) 
}


export interface HeaderModel {
    icon?: React.ReactNode,
    name: string,
}