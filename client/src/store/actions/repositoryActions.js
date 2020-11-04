import axios from "axios"

import { FETCH_REPOSITORIES, GET_ERRORS } from "./types"
import { loading, clearLoading } from "./loadingActions"

export const fetchRepositories = (type, page) => async dispatch => {
  dispatch(loading())
  try {
    // CALL REQUEST
    const res = await axios.get(
      `https://api.github.com/${type}?since=${page}&per_page=100`
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
