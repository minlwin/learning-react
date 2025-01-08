export default function Alert({title}: {title:string}) {
    return (
        <div className="py-4 px-8 rounded-md bg-blue-300">
            {title}
        </div>
    )
}