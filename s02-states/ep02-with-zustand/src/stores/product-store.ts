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
                nextId : () => {
                    set(state => state.id += 1)
                    return get().id
                }
            })
        ),
        {
            name : 'com.jdc.zustand.product.store',
            storage : createJSONStorage(() => localStorage)
        }
    )
)

