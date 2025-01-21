import { create } from "zustand";

type State = {
    activeMenu? : string
}
type Action = {
    setActiveMenu : (menu : string | undefined) => void
}

export const useActiveMenu = create<State & Action>((set) => ({
    activeMenu : '',
    setActiveMenu : (menu) => set({activeMenu : menu})
}))