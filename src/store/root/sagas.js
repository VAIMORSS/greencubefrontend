import { fork, all } from "redux-saga/effects";
import usersSaga from "../users/saga";
import dashboardSaga from "../dashboard/saga";

export default function* root() {
  yield all([fork(usersSaga), fork(dashboardSaga)]);
}
