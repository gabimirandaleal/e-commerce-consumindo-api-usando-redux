import { combineReducers } from "redux";
import user  from "./user/reducer"
import carrinho from "./carrinho/reducer"

export default combineReducers({
    user,
    carrinho
})