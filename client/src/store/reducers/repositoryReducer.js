import {
  FETCH_USERS,
  FETCH_REPOSITORY_CONTRIBUTORS,
  FETCH_REPOSITORIES,
  FETCH_REPOSITORY,
  LOADING_DATA,
  CLEAR_LOADING_DATA
} from "../actions/types"

const initialState = {
  users: [],
  repositories: [],
  repository: {},
  contributors: [],
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
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    case FETCH_REPOSITORIES:
      return {
        ...state,
        repositories: action.payload,
        loading: false
      }
    case FETCH_REPOSITORY_CONTRIBUTORS:
      return {
        ...state,
        contributors: action.payload,
        loading: false
      }
    case FETCH_REPOSITORY:
      return {
        ...state,
        repository: action.payload,
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
