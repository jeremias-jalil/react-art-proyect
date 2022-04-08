import {
  GET_SEARCH,
  GET_SEARCH_ARTIST,
  GET_SEARCH_ART,
  CLEAN,
  CLEAN_ART,
  LOADING,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
} from "../function/const";
import {
  getSearchApi,
  getSearchForArtistApi,
  getArtApi,
} from "../function/api";

export function getSearch(search, type) {
  return function (dispatch) {
    return (
      dispatch({ type: LOADING }),
      getSearchApi(search, type).then((r) => {
        return (
          dispatch({
            type: GET_SEARCH,
            payload: r,
          }),
          dispatch({ type: LOADING })
        );
      })
    );
  };
}

export function searchCuadrosArtistas(value) {
  return (dispatch) => (
    dispatch({ type: LOADING }),
    getSearchForArtistApi(value).then(
      (r) => (
        dispatch({
          type: GET_SEARCH_ARTIST,
          payload: r,
        }),
        dispatch({ type: LOADING })
      )
    )
  );
}

export function cuadroDetail(id) {
  return (dispatch) => (
    dispatch({ type: LOADING }),
    getArtApi(id).then(
      (r) => (
        dispatch({
          type: GET_SEARCH_ART,
          payload: r,
        }),
        dispatch({ type: LOADING })
      )
    )
  );
}

export function clean() {
  return {
    type: CLEAN,
  };
}

export function cleanArt() {
  return {
    type: CLEAN_ART,
  };
}

export function add_favourite(art) {
  return {
    type: ADD_FAVOURITE,
    payload: art,
  };
}

export function remove_favourite(id) {
  return {
    type: REMOVE_FAVOURITE,
    payload: id,
  };
}
