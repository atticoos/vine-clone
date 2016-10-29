import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import selector from '../selectors/feed';
import * as FeedActions from '../actions/feed';
import * as VideoActions from '../actions/videoActions';
import CardScrollView from '../components/cardScrollView';
import Screen from '../components/screen';
import Video from 'react-native-video';
import VideoPost from '../components/videoPost';

class Feed extends React.Component {
  static defaultProps = {
    autoPlay: false,
    perPage: 5
  };
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
    this.onCardChanged = this.onCardChanged.bind(this);
  }
  componentWillMount () {
    if (this.props.autoPlay) {
      this.props.feedActions.playVideo(this.props.videos[0].postId);
    }
  }
  onCardChanged (index) {
    if (this.props.autoPlay) {
      this.props.feedActions.playVideo(this.props.videos[index].postId);
    }
  }
  render () {
    return (
      <Screen>
        <CardScrollView onCardChanged={this.onCardChanged}>
          {this.props.videos.slice(0, this.props.perPage).map(video => (
            <VideoPost
              key={video.postId}
              video={video}
              active={video.postId === this.props.videoPlaying}
              paused={this.props.videoPaused}
              onPlay={() => this.props.feedActions.playVideo(video.postId)}
              onPause={() => this.props.feedActions.pauseVideo()}
              onLoop={() => this.props.videoActions.loop(video.postId)}
            />
          ))}
        </CardScrollView>
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
