import { GET_DASHBOARD_INTEREST_COUNT, GET_DASHBOARD_INTEREST_COUNT_RESPONSE } from "./actions";

const initialStore = {
    dashboard: null,
    loading: false,
    error: null,
}

const getDashboardInterests = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const getDashboardInterestsResult = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.error,
        dashboard: action.payload
    }
}

function reducer(state = initialStore, action) {
    switch (action.type) {
        case GET_DASHBOARD_INTEREST_COUNT:
            return getDashboardInterests(state, action);
        case GET_DASHBOARD_INTEREST_COUNT_RESPONSE:
            return getDashboardInterestsResult(state, action);
        default:
            return state;
    }
}

export default reducer;