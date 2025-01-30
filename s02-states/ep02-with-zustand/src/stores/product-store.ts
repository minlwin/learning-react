import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

export type ProductForm = {
    name : string
    category : string
    price : number
    [key : string] : any
}

type Product = {
    id : number
} & ProductForm

type ProductStoreState = {
    products : Product[]
    id : number
}

type ProductStoreActions = {
    add : (item : ProductForm) => Product | undefined
    remove : (id : number) => void
    findById : (id : number) => Product | undefined
}

export const useProductStore = create(
    persist(
        immer<ProductStoreState & ProductStoreActions> (
            (set, get) => ({
                id : 0,
                products : [],
                add : (item) => {
                    let newProduct;
                    set(state => {
                        state.products.push({...item, id : ++ state.id})
                    })
                    return newProduct
                },
                remove : (id) => {
                    set(state => state.products = state.products.filter(product => product.id != id))
                },
                findById : (id) => {
                    const filtered = get().products.filter(a => a.id === id)
                    return filtered[0]
                }
            })
        ),
        {
            name : 'com.jdc.zustand.product.store',
            storage : createJSONStorage(() => localStorage)
        }
    )
)

