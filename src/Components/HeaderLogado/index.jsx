import {Div, SpanHub, Container, Carrinho, DivSair, Icone} from "./style"
import {useHistory} from "react-router-dom";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { MdLogout } from "react-icons/md";
import {logOutThunk} from "../../Store/modules/user/thunk"
import { useDispatch } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      background: "#403CAA"
    },
  }));

function HeaderLogado({atualizar}){
    const dispatch = useDispatch();
    const history = useHistory();

    function sair() {
        dispatch((logOutThunk()))
        history.push("/")
    }

    return(
        <Container>
            <Div> 
                <span>Kenzie</span>
                <SpanHub>Shop</SpanHub>
            </Div>
            <DivSair>
                <Carrinho onClick={() => history.push("/carrinho")}>
                {
                    atualizar === 0 ?
                    <ShoppingCartIcon /> :
                    <StyledBadge badgeContent={atualizar} color="secondary">
                        <ShoppingCartIcon />
                    </StyledBadge>

                    
                        
                }
                
                <span>Carrinho</span>
                </Carrinho>
                <Icone onClick={sair}>
                    <MdLogout/>
                </Icone>
            </DivSair>
        </Container>
    )


}

export default HeaderLogado;