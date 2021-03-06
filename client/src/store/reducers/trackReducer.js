import {
  FETCH_TRACKS_REPOSITORIES,
  FETCH_TRACKS_USERS,
  LOADING_DATA,
  CLEAR_LOADING_DATA
} from "../actions/types"

const initialState = {
  users: [],
  repositories: [],
  loading: false
}

export default function trackReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      }
    case FETCH_TRACKS_REPOSITORIES:
      return {
        ...state,
        repositories: action.payload,
        loading: false
      }
    case FETCH_TRACKS_USERS:
      return {
        ...state,
        users: action.payload,
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
