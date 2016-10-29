import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import Colors from '../../constants/colors';
import Styles from '../../constants/styles';
import Header from './header';
import ControlBar from './controlBar';
import Description from './description';
import Thumbnail from './thumbnail';
import Video from './video';

class VideoPost extends React.Component {
  render () {
    var {
      video,
      style,
      playing,
      paused,
      onPlay,
      onPause,
      onLoop,
      ...props
    } = this.props;
    return (
      <View style={[styles.container, style]} {...props}>
        <View style={styles.padding}>
          <Header
            user={video.user}
            postTime={video.created}
            loops={video.loops.count}
          />
        </View>
        {!playing &&
          <Thumbnail
            style={styles.thumbnail}
            url={video.thumbnailUrl}
            onPress={this.props.onPlay}
          />
        }
        {playing &&
          <Video
            style={styles.thumbnail}
            url={video.videoUrl}
            paused={paused}
            onPress={paused ? onPlay : onPause}
            onEnd={onLoop}
          />
        }
        <View style={styles.padding}>
          {!!video.description &&
            <Description
              style={styles.description}
              description={video.description}
              entities={video.entities}
            />
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
    borderBottomColor: Colors.Gray.LIGHT,
    borderBottomWidth: 2,
    paddingBottom: 20
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
    marginBottom: 15,
    color: Colors.Black.NORMAL
  }
});

export default VideoPost;
