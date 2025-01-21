export function FieldError({message} : {message? : string}) {
    return (
        <>
            {message && <span className="text-sm text-gray-500">{message}</span>}
        </>
    )
}