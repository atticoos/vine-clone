import {fork} from 'redux-saga/effects';
import videoSaga from './videos';

export default function* rootSaga () {
  yield [
    fork(videoSaga)
  ];
}
