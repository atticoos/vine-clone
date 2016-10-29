import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import selector from '../selectors/feed';
import * as FeedActions from '../actions/feed';
import * as VideoActions from '../actions/videoActions';
import Screen from '../components/screen';
import Video from 'react-native-video';
import VideoPost from '../components/videoPost';

class Feed extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      rate: 1,
      volume: 1,
      repeat: true,
      muted: false,
      paused: true,
      controls: false,
      skin: 'custom'
    };
  }
  render () {
    return (
      <Screen>
        <ScrollView>
          {this.props.videos.map(video => (
            <VideoPost
              key={video.postId}
              video={video}
              playing={video.postId === this.props.videoPlaying}
              paused={this.props.videoPaused}
              onPlay={() => this.props.feedActions.playVideo(video.postId)}
              onPause={() => this.props.feedActions.pauseVideo()}
              onLoop={() => this.props.videoActions.loop(video.postId)}
            />
          ))}
        </ScrollView>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  video: {
    height: 100,
    width: 100
  }
});

const actions = dispatch => ({
  feedActions: bindActionCreators(FeedActions, dispatch),
  videoActions: bindActionCreators(VideoActions, dispatch)
});

export default connect(selector, actions)(Feed);
