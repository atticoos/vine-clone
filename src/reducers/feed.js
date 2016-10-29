import * as ActionTypes from '../actions/types';

const initialState = {
  videoPlaying: null,
  paused: false,
  videosActivated: {}
};

export default function feedReducer (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FEED_PLAY_VIDEO:
      return {
        ...state,
        videoPlaying: action.videoId,
        paused: false,
        videosActivated: {
          ...state.videosActivated,
          [action.videoId]: true
        }
      };
    case ActionTypes.FEED_PAUSE_VIDEO:
      return {
        ...state,
        paused: true
      };
    default:
      return state;
  }
}
