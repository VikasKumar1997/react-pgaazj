import { put, takeLatest } from "redux-saga/effects";
import { addData$ } from "./action";

function* handleAddData(action) {
  console.log(action.payload);
  yield put(addData$.request());
  try {
    yield put(addData$.success(action.payload));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(addData$.fulfill());
  }
}

export default function* watcher() {
  yield takeLatest(addData$.TRIGGER, handleAddData);
}
