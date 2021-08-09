import { takeEvery, put } from "redux-saga/effects";
import {
    GET_USERS_RESULTS,
    GET_USERS_RESULTS_RESPONSE,
    GET_USERS_SEARCH_RESULTS,
    GET_USERS_SEARCH_RESULTS_RESPONSE
} from "./actions";
import Axios from 'axios';
import { BASE_URL } from '../../util/'
//TODO jemeter database add sitename and try to create form data uploader


function* getUsersResults(action) {
    try {
        const res = yield Axios.get(`${BASE_URL}/users?page=${action.page}&limit=${action.limit}`);
        yield put({ payload: res.data, type: GET_USERS_RESULTS_RESPONSE });
    } catch (e) {
        yield put({ error: e, type: GET_USERS_RESULTS_RESPONSE });
    }
}

function* seachUsersResult(action) {
    try {
        const res = yield Axios.get(`${BASE_URL}/users/search?query=${action.query}`);
        yield put({ payload: res.data, type: GET_USERS_SEARCH_RESULTS_RESPONSE });
    } catch (e) {
        yield put({ error: e, type: GET_USERS_SEARCH_RESULTS_RESPONSE });
    }

}

function* sagaWatcher() {
    yield takeEvery(GET_USERS_RESULTS, getUsersResults);
    yield takeEvery(GET_USERS_SEARCH_RESULTS, seachUsersResult)
}

export default sagaWatcher;