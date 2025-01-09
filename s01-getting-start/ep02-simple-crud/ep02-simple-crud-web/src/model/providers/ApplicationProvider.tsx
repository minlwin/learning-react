import { ActiveMenuProvider } from "./ActiveMenuProvider";

export default function ApplicationProvider({children} : {children:Readonly<React.ReactNode>}) {
    return (
        <ActiveMenuProvider>
            {children}
        </ActiveMenuProvider>
    )
}