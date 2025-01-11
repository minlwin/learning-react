import { Children } from "..";
import { ActiveMenuProvider } from "./ActiveMenuProvider";

export default function ApplicationProvider({children} : Children) {
    return (
        <ActiveMenuProvider>
            {children}
        </ActiveMenuProvider>
    )
}