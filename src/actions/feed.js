import * as ActionTypes from './types';

export function playVideo (videoId) {
  return {
    type: ActionTypes.FEED_PLAY_VIDEO,
    videoId
  };
}

export function pauseVideo () {
  return {
    type: ActionTypes.FEED_PAUSE_VIDEO
  };
}
