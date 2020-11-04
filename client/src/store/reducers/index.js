import { combineReducers } from "redux"
import repositoryReducer from "./repositoryReducer"

const reducer = () =>
  combineReducers({
    repositories: repositoryReducer
  })

export default reducer
