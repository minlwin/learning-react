export default function FieldError({message} : {message? : string}) {
    return message && <span className="text-sm text-gray-400">{message}</span>
}