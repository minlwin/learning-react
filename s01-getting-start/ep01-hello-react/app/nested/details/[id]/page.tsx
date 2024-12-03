import JsonViewer from "@/components/json-viewer";

export default function Details({params}: {params: {id: string}}) {
    return (
        <>
            <JsonViewer data={params} />
        </>
    )
}