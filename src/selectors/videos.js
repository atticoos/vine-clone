import moment from 'moment';
import {createSelector} from 'reselect';

const videoEntitiesSelector = state => state.entities.videos;

const videosSelector = createSelector(
  videoEntitiesSelector,
  (videoEntities) => Object.keys(videoEntities)
    .map(postId => ({
      ...videoEntities[postId],
      created: moment(videoEntities[postId].created),
    }))
    .sort((a, b) => b.created - a.created)
);

export default videosSelector;
