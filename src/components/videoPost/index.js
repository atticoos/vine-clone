import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import Styles from '../../constants/styles';
import Header from './header';
import ControlBar from './controlBar';
import Thumbnail from './thumbnail';
import Video from './video';

class VideoPost extends React.Component {
  render () {
    var {
      video,
      style
    } = this.props;
    return (
      <View style={[styles.container, style]}>
        <View style={styles.padding}>
          <Header
            user={video.user}
            postTime={video.created}
            loops={video.loops.count}
          />
        </View>
        {!this.props.playing &&
          <Thumbnail
            style={styles.thumbnail}
            url={video.thumbnailUrl}
            onPress={this.props.onPlay}
          />
        }
        {this.props.playing &&
          <Video
            style={styles.thumbnail}
            url={video.videoUrl}
            paused={this.props.paused}
            onPress={this.props.paused ? this.props.onPlay : this.props.onPause}
            onEnd={this.props.onLoop}
          />
        }
        <View style={styles.padding}>
          {!!video.description &&
            <Text style={styles.description}>{video.description}</Text>
          }
          <ControlBar
            likes={video.likes.count}
            revines={video.reposts.count}
            comments={video.comments.count}
            onLikePressed={() => {}}
            onCommentPressed={() => {}}
            onRevinePressed={() => {}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'gray',
    borderBottomWidth: 2
  },
  thumbnail: {
    height: 400,
    width: 400
  },
  padding: {
    padding: Styles.Padding.NORMAL
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
    color: 'black'
  }
});

export default VideoPost;
