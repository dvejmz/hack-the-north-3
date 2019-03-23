import * as types from "../constants/actionTypes";
import axios from "axios";
import APIEndpoints from "../constants/endpoints";

const querySuccessful = payload => {
  return { type: types.QUERY_COMPLETE, payload };
};

const passphraseNotFound = () => {
  return { type: types.PASSPHRASE_NOT_FOUND };
};

const startQuery = () => {
  return { type: types.QUERY_START };
};

export const queryPassphrase = passphrase => {
  return dispatch => {
    dispatch(startQuery());
    axios
      .get(`${APIEndpoints.answers}?friendlyCode=${passphrase}`)
      .then(response => {
        dispatch(querySuccessful(response.body));
      })
      .catch(error => {});
  };
};
