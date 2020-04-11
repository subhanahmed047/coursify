import * as types from './actionTypes';
import * as authorApi from '../../api/authorApi';

export const loadAuthorsSuccess = (authors) => {
  return {
    type: types.LOAD_AUTHORS_SUCCESS,
    authors,
  };
};

export const loadAuthors = () => {
  return (dispatch) => {
    return authorApi.getAuthors().then((authors) => {
      return dispatch(loadAuthorsSuccess(authors));
    });
  };
};
