import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { add } from '../redux/slice';


function*fetchdata(){
    const data =yield call(()=>fetch("https://fakestoreapi.com/products"));
    const res = yield data.json();
    yield put(add(res))
}



function* mySaga() {
    yield takeLatest("USER_FETCH_REQUESTED", fetchdata);
  }
  
  export default mySaga;