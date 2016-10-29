import {createStructuredSelector} from 'reselect';
import videosSelector from './videos';

const videoPlaying = state => state.feed.videoPlaying;
const videoPaused = state => state.feed.paused;

export default createStructuredSelector({
  videos: videosSelector,
  videoPlaying,
  videoPaused
})
