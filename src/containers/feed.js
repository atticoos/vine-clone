import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text
} from 'react-native';
import {connect} from 'react-redux';
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
    console.log(this.props);
    return (
      <Screen>
        <ScrollView>
          {this.props.videos.map(video => (
            <VideoPost
              key={video.postId}
              video={video}
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

const selector = state => ({
  videos: Object.keys(state.entities.videos).map(postId => state.entities.videos[postId])
});

export default connect(selector)(Feed);
