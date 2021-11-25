import {addCarrinho, removeCarrinho} from "./actions"

export const addToCartThunk = (product) => (dispatch) =>{
    const list = JSON.parse(localStorage.getItem("cart")) || [];

    if(list.filter((item) => item.id === product.id).length === 0){
        const novaLista = [...list, product];
        localStorage.setItem("cart", JSON.stringify(novaLista));
        dispatch(addCarrinho(product))
    }
    
}

export const removeToCartThunk = (product, setProdutosCarrinho) => (dispatch) =>{
    const list = JSON.parse(localStorage.getItem("cart")) || [];
    const novaLista = list.filter((item) => item.id !== product.id);
    setProdutosCarrinho(novaLista)
    localStorage.setItem("cart", JSON.stringify(novaLista));
    dispatch(removeCarrinho(product))
}
