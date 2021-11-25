import Header from "../../Components/Header"
import {TextField} from "@mui/material"
import {Div, Form, Error} from "./style"
import Button from "../../Components/Button"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory }  from 'react-router-dom'
import { useDispatch } from "react-redux";
import {signInThunk} from "../../Store/modules/user/thunk"

function Login(){
    const history = useHistory();
    const dispatch = useDispatch();
    
    const formSchema = yup.object().shape({
        username: yup.string().required("Usuário obrigatório"),
        password: yup.string().required("Senha obrigatória"),
    })

    const { register, 
            handleSubmit, 
            formState: { errors },
    } = useForm({
        resolver:yupResolver(formSchema),
    })



    const onSubmitFunction = data => {
        dispatch(signInThunk(data))
    }

    

    return(
        <Div>
            <Header></Header>
            <Form onSubmit={handleSubmit(onSubmitFunction)}>
                <TextField margin="normal" fullWidth id="login-basic" label="Nome de usuário" variant="outlined" {...register("username")}/>
                <Error>
                    {
                    errors.username?.message.split(";").map((item)=>(
                        <li>
                          {item}
                        </li>
                    ))
                    
                    }
                  </Error>
                <TextField margin="normal" fullWidth type="password" id="password-basic" label="Password" variant="outlined" {...register("password")}/>
                <Error>
                    {
                    errors.password?.message.split(";").map((item)=>(
                        <li>
                          {item}
                        </li>
                    ))
                    
                    }
                  </Error>
                <Button text={"Logar"} color="true">Logar</Button>
                <Button type="submit" onclick={() => history.push("/cadastrar")} text={"Cadastre-se"}></Button>
            </Form>
        </Div>
    )
}

export default Login;