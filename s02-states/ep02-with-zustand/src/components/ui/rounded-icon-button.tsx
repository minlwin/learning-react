export default function RoundedIconLink({children, href} : {
    children : React.ReactNode,
    href : string 
}) {
    return (
        <a href={href} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {children}
        </a>
    )
}