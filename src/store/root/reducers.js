import { combineReducers } from "redux";
import users from "../users/reducer"
import dashboard from "../dashboard/reducer"


const rootReducer = combineReducers({
  users,
  dashboard,
});


export default rootReducer;
