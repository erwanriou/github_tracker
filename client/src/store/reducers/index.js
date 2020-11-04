import { combineReducers } from "redux"
import repositoryReducer from "./repositoryReducer"
import trackReducer from "./trackReducer"
import errorReducer from "./errorReducer"

const reducer = () =>
  combineReducers({
    repositories: repositoryReducer,
    tracks: trackReducer,
    errors: errorReducer
  })

export default reducer
