import {takeEvery} from 'redux-saga';
import {put, select} from 'redux-saga/effects';
import * as ActionTypes from '../actions/types';
import * as VideoActions from '../actions/videoActions';

function* registerVideoLoop ({videoId}) {
  var video = yield select(state => state.entities.videos[videoId]);

  var updatedVideo = {
    ...video,
    loops: {
      ...video.loops,
      count: video.loops.count + 1
    }
  };

  yield put(VideoActions.updateVideo(updatedVideo));
}

export default function* saga () {
  yield takeEvery(ActionTypes.VIDEO_LOOP, registerVideoLoop);
}
