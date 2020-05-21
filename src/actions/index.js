import * as constants from "../constants";
import axios from 'axios';

const fetchBegin = () => ({
    type: constants.FETCH_BEGIN
});

const fetchSuccess = resp => ({
    type: constants.FETCH_SUCCESS,
    payload: resp
});

const fetchFailure = err => ({
    type: constants.FETCH_FAILURE,
    payload: err
});

export const getData = () => dispatch => {
    dispatch(fetchBegin);
    axios.get("./portfolio/db.json")
    .then(resp => {
      console.log("response",resp.data);
      dispatch(fetchSuccess(resp.data));
    })
    .catch(err => {
      console.log(err);
      dispatch(fetchFailure(err));
    })
}