import { GET_USERS_RESULTS, GET_USERS_RESULTS_RESPONSE, GET_USERS_SEARCH_RESULTS, GET_USERS_SEARCH_RESULTS_RESPONSE } from "./actions";

const initialStore = {
    users: null,
    loading: false,
    error: null,
}

const getUsers = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const getUsersResult = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.error,
        users: action.payload
    }
}

const getSearch = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const getSearchResult = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.error,
        users: action.payload
    }
}

function reducer(state = initialStore, action) {
    switch (action.type) {
        case GET_USERS_RESULTS:
            return getUsers(state, action);
        case GET_USERS_RESULTS_RESPONSE:
            return getUsersResult(state, action);
        case GET_USERS_SEARCH_RESULTS:
            return getSearch(state, action);
        case GET_USERS_SEARCH_RESULTS_RESPONSE:
            return getSearchResult(state, action);
        default:
            return state;
    }
}

export default reducer;
