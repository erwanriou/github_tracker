import axios from "axios"

import {
  FETCH_REPOSITORY_CONTRIBUTORS,
  FETCH_REPOSITORIES,
  FETCH_REPOSITORY,
  FETCH_USERS,
  GET_ERRORS
} from "./types"
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

export const fetchRepository = (name, repo) => async dispatch => {
  dispatch(loading())
  try {
    // CALL REQUEST
    const res = await axios.get(`https://api.github.com/repos/${name}/${repo}`)
    const contributors = await axios.get(
      `https://api.github.com/repos/${name}/${repo}/contributors`
    )
    dispatch({
      type: FETCH_REPOSITORY,
      payload: res.data
    })
    dispatch({
      type: FETCH_REPOSITORY_CONTRIBUTORS,
      payload: contributors.data
    })
  } catch (e) {
    dispatch({
      type: GET_ERRORS,
      payload: e.response.data
    })
  }
  dispatch(clearLoading())
}
