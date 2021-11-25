import {CardProduct, Container, HeaderCard} from "./style"
import Button from "../../Components/Button"
import HeaderCarrinho from "../../Components/HeaderCarrinho"
import { removeToCartThunk } from "../../Store/modules/carrinho/thunk";
import { useDispatch } from "react-redux";
import { useState } from "react"

function Carrinho(){
    const dispatch = useDispatch();
    const [produtosCarrinho, setProdutosCarrinho] = useState(JSON.parse(localStorage.getItem("cart")))
    const [atualizar, setAtualizar] = useState(JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")).length :  0)

    function removeCart(id){
        dispatch(removeToCartThunk(produtosCarrinho.find((item) => item.id === id), setProdutosCarrinho))
        setAtualizar(JSON.parse(localStorage.getItem("cart")).length)
    }
    

    return(
        <div>
            <HeaderCarrinho atualizar={atualizar}></HeaderCarrinho>
            <Container>
                {
                   produtosCarrinho && produtosCarrinho.map((item, index) => (
                            <CardProduct key={index}>
                                <HeaderCard>
                                    <img  src={item.image} alt={item.title}/>
                                    <h3>{item.title}</h3>
                                    <span>{`R$ ${(item.price).toString().replace(".", ",")}`}</span>
                                </HeaderCard>
                                <Button onclick={() => removeCart(item.id)} text={"Remover Carrinho"} color="true"></Button>
                            </CardProduct>
                    ))
                }   
           </Container>
        </div>
    )
}
export default Carrinho;