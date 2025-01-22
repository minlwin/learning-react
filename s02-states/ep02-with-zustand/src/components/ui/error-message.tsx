export default function ErrorMessage({message} : {message? : string}) {
    return (
        <>
        {message && <div className="text-red-500 text-sm">{message}</div>}
        </>
    )
}