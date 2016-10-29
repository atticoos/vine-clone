import * as ActionTypes from './types';

export function loop (videoId) {
  return {
    type: ActionTypes.VIDEO_LOOP,
    videoId
  };
}

export function updateVideo (entity) {
  return {
    type: ActionTypes.UPDATE_VIDEO,
    entity
  };
}
