import awVideoData from '../../aw.json';

const initialState = {
  videos: awVideoData.reduce((map, video) => {
    map[video.postId] = video;
    return map;
  }, {})
};

export default function entitiesReducer (state = initialState, action) {
  return state;
}
