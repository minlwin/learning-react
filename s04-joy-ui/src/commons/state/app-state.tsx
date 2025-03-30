import { DrawerStateProvider } from "./drawer-state";
import { SelectedMenuStateProvider } from "./selected-menu-state";

function AppStateProvider({children} : {children: React.ReactNode}) {
    return (
        <DrawerStateProvider>
            <SelectedMenuStateProvider>
                {children}
            </SelectedMenuStateProvider>
        </DrawerStateProvider>
    )
}

export {
    AppStateProvider
}