import axios from "axios"

import {
  FETCH_TRACKS_REPOSITORIES,
  FETCH_TRACKS_USERS,
  SAVE_REPOSITORY,
  SAVE_USER,
  GET_ERRORS
} from "./types"
import { loading, clearLoading } from "./loadingActions"

export const fetchTrackUser = () => async dispatch => {
  dispatch(loading())
  try {
    const res = await axios.get("/api/users")
    dispatch({
      type: FETCH_TRACKS_USERS,
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

export const fetchTrackRepositories = () => async dispatch => {
  dispatch(loading())
  try {
    const res = await axios.get("/api/repositories")
    dispatch({
      type: FETCH_TRACKS_REPOSITORIES,
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

export const saveUser = (userData, history) => async dispatch => {
  dispatch(loading())
  try {
    await axios.post("/api/users", userData)
    dispatch({
      type: SAVE_USER
    })
    history.push("/tracks/users")
  } catch (e) {
    dispatch({
      type: GET_ERRORS,
      payload: e.response.data
    })
  }
  dispatch(clearLoading())
}

export const saveRepository = (RepoData, history) => async dispatch => {
  dispatch(loading())
  try {
    await axios.post("/api/repositories", RepoData)
    dispatch({
      type: SAVE_REPOSITORY
    })
    history.push("/tracks/repositories")
  } catch (e) {
    dispatch({
      type: GET_ERRORS,
      payload: e.response.data
    })
  }
  dispatch(clearLoading())
}
