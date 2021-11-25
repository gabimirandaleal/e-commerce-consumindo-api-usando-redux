import {CardProduct, Container, HeaderCard, ContainerE, CarrinhoFinalizar} from "./style"
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

    const total = produtosCarrinho.reduce(function (acumulador, valorAtual) {
            return acumulador + valorAtual.price;
    }, 0);
    console.log( total)

    return(
        <div>
            <HeaderCarrinho atualizar={atualizar}></HeaderCarrinho>
            <ContainerE>
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
                <CarrinhoFinalizar>
                    <div>
                            <span>Total: </span>
                            <span>{`R$ ${(total).toString().replace(".", ",")}`}</span>
                    </div>
                    <Button text={"Finalizar Compra"} color="true"></Button>
                </CarrinhoFinalizar>
           </ContainerE>
        </div>
    )
}
export default Carrinho;