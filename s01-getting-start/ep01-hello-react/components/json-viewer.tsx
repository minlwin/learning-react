export default function JsonViewer({data}: {data:any}) {
    return (
        <pre className="bg-blue-800 text-yellow-100 p-4">{JSON.stringify(data, null, 2)}</pre>
    ) 
}