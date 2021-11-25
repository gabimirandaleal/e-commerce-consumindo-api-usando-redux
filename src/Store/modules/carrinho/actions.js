import { ADD_CARRINHO, REMOVE_CARRINHO } from "./actionType";


export const addCarrinho = (product) =>(
    {
        type: ADD_CARRINHO,
        product
    }
)

export const removeCarrinho = (product) =>(
    {
        type: REMOVE_CARRINHO,
        product
    }
)