import moment from 'moment';
import {createSelector} from 'reselect';

const videoEntitiesSelector = state => state.entities.videos;
const userEntitiesSelector = state => state.entities.users;

const videosSelector = createSelector(
  videoEntitiesSelector,
  userEntitiesSelector,
  (videoEntities, userEntities) => Object.keys(videoEntities)
    .map(postId => {
      var video = videoEntities[postId];
      var videoUrl = video.videoDashUrl || video.videoLowURL || video.videoUrl;
      return {
        ...video,
        user: userEntities[video.userId],
        created: moment(video.created),
        videoUrl: videoUrl.split('?')[0]
      };
    })
    .filter(video => !!video.user)
    .sort((a, b) => b.created - a.created)
);

export default videosSelector;
