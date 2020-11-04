import { combineReducers } from "redux"
import repositoryReducer from "./repositoryReducer"
import errorReducer from "./errorReducer"

const reducer = () =>
  combineReducers({
    repositories: repositoryReducer,
    errors: errorReducer
  })

export default reducer
