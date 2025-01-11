export default function ListItem({label, value} : Model) {
    return (
        <div className="border-solid border-b-2 border-gray-300 mb-3">
            <label className="block text-sm text-gray-400">{label}</label>
            <div className="mb-2 text-xl">{value}</div>
        </div>
    )
}

type Model = {
    label: string
    value: string
}