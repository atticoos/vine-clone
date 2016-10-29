import * as ActionTypes from '../actions/types';
import timelineAW from '../../data/timeline.aw.json';
import timelineGX from '../../data/timeline.gx.json';
import profileAW from '../../data/profile.aw.json'
import profileGX from '../../data/profile.gx.json';

const initialState = {
  videos: timelineAW.concat(timelineGX).reduce((map, video) => {
    map[video.postId] = video;
    return map;
  }, {}),
  users: {
    [profileAW.userId]: profileAW,
    [profileGX.userId]: profileGX
  }
};

export default function entitiesReducer (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_VIDEO:
      return {
        ...state,
        videos: {
          ...state.videos,
          [action.entity.postId]: action.entity
        }
      };
    default:
      return state;
  }
  return state;
}
