
export function JsonViewr({data} : {data : any}) {
    return (
        <pre className="p-8 bg-black text-white">
            {data && JSON.stringify(data, null, 2)}
        </pre>
    )
}