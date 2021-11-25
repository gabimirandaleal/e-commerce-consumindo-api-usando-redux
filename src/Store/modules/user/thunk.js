import api from "../../../services/api";
import { signIn, logOut } from "./actions";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const signInThunk = (data) => (dispatch) => {
    api.post(`/sessions/`, data)
    .then((response)=> {
        const { access } = response.data
        localStorage.clear()
        localStorage.setItem("Kenzie-shop:token", JSON.stringify(access));
        dispatch(signIn(access))
        
    })
    .catch((_) => {
        toast.error("Usuário ou senha inválidos")
    })

}

export const logOutThunk = () => (dispatch) => {
    localStorage.clear()
    dispatch(logOut())
}
