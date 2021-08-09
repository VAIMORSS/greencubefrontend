import { takeEvery, put, all, fork } from "redux-saga/effects";
import Axios from 'axios';
import { GET_DASHBOARD_INTEREST_COUNT, GET_DASHBOARD_INTEREST_COUNT_RESPONSE } from "./actions";
import { BASE_URL } from '../../util/'



function* getDashboardInterestsResult(action) {
    try {

        const pendingCount = yield Axios.get(`${BASE_URL}/users/dashboardinfo?interest=pending`);
        const connectedCount = yield Axios.get(`${BASE_URL}/users/dashboardinfo?interest=connected`);
        const respondedCount = yield Axios.get(`${BASE_URL}/users/dashboardinfo?interest=responded`);
        const bookingInProgressCount = yield Axios.get(`${BASE_URL}/users/dashboardinfo?interest=booking in progress`);
        const callBookedCount = yield Axios.get(`${BASE_URL}/users/dashboardinfo?interest=yes call booked`);
        const noResponseCount = yield Axios.get(`${BASE_URL}/users/dashboardinfo?interest=no response`);

        yield put({
            payload: {
                "pending": pendingCount.data,
                "conected": connectedCount.data,
                "responded": respondedCount.data,
                "booking in progress": bookingInProgressCount.data,
                "call booked count": callBookedCount.data,
                "no response": noResponseCount.data,
            }, type: GET_DASHBOARD_INTEREST_COUNT_RESPONSE
        });
    } catch (e) {
        yield put({ error: e, type: GET_DASHBOARD_INTEREST_COUNT_RESPONSE });
    }
}

function* sagaWatcher() {
    yield takeEvery(GET_DASHBOARD_INTEREST_COUNT, getDashboardInterestsResult);
}

export default sagaWatcher;