import axios from "axios"

import { FETCH_REPOSITORIES, FETCH_USERS, GET_ERRORS } from "./types"
import { loading, clearLoading } from "./loadingActions"

export const fetchUsers = (type, page) => async dispatch => {
  dispatch(loading())
  try {
    // CALL REQUEST
    const res = await axios.get(
      `https://api.github.com/${type}?since=${page}&per_page=50`
    )

    dispatch({
      type: FETCH_USERS,
      payload: res.data
    })
  } catch (e) {
    dispatch({
      type: GET_ERRORS,
      payload: e.response.data
    })
  }
  dispatch(clearLoading())
}

export const fetchRepositories = (type, name, page) => async dispatch => {
  dispatch(loading())
  try {
    // CALL REQUEST
    const res = await axios.get(
      `https://api.github.com/${type}/${name}/repos?page=${page}&per_page=50`
    )

    dispatch({
      type: FETCH_REPOSITORIES,
      payload: res.data
    })
  } catch (e) {
    dispatch({
      type: GET_ERRORS,
      payload: e.response.data
    })
  }
  dispatch(clearLoading())
}
