import api from "../../services/api"
import { useEffect, useState } from "react"
import HeaderLogado from "../../Components/HeaderLogado"
import {CardProduct, Container, HeaderCard} from "./style"
import Button from "../../Components/Button"
import { useDispatch } from "react-redux";
import { addToCartThunk } from "../../Store/modules/carrinho/thunk"

function Dashboard(){
    const [products, setProducts] = useState([])
    const [atualizar, setAtualizar] = useState(JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")).length :  0)
    const dispatch = useDispatch();

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("Kenzie-shop:token"))
        api.get("/products/", {headers: { Authorization: `Bearer ${token}` }})
        .then((response) =>{
            setProducts(response.data)
        })
    }, [])


    function addCart(id){
        dispatch(addToCartThunk(products.find((item) => item.id === id)))
        setAtualizar(JSON.parse(localStorage.getItem("cart")).length)
    }


    
    return(
        <div>
            <HeaderLogado atualizar={atualizar}></HeaderLogado>
            <Container>
            {
                products.map((item, index) =>(
                    <CardProduct key={index}>
                        <HeaderCard>
                            <img  src={item.image} alt={item.title}/>
                            <h3>{item.title}</h3>
                            <span>{`R$ ${(item.price).toString().replace(".", ",")}`}</span>
                        </HeaderCard>
                        <Button onclick={() => addCart(item.id)} text={"Adicionar Carrinho"} color="true"></Button>
                    </CardProduct>
                ))
            }
            </Container>
        </div>
    )
}

export default Dashboard;