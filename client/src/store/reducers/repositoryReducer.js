import {
  FETCH_REPOSITORIES,
  LOADING_DATA,
  CLEAR_LOADING_DATA
} from "../actions/types"

const initialState = {
  repositories: [],
  repository: {},
  total: 0,
  loading: false
}

export default function repositoryReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      }
    case FETCH_REPOSITORIES:
      return {
        ...state,
        repositories: action.payload,
        loading: false
      }
    case CLEAR_LOADING_DATA:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
