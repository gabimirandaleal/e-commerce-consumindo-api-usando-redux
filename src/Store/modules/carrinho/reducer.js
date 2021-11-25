import { ADD_CARRINHO, REMOVE_CARRINHO } from "./actionType";

const defaultState = JSON.parse(localStorage.getItem("cart")) || [];


const carrinhoReducer = (state = defaultState, action)=>{
    const {product} = action
    switch (action.type) {
        case ADD_CARRINHO:   
            return [...state, product]
        case REMOVE_CARRINHO:
            return state.filter((item) => item !== product.id)
        default:
            return state;
    }
}

export default carrinhoReducer;