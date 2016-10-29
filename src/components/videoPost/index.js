import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text
} from 'react-native';
import Colors from '../../constants/colors';
import Styles from '../../constants/styles';
import Header from './header';
import ControlBar from './controlBar';
import Description from './description';
// import Thumbnail from './thumbnail';
// import Video from './video';
import Player from './player';

class VideoPost extends React.Component {
  render () {
    var {
      video,
      style,
      active,
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

        <Player
          style={styles.thumbnail}
          video={video}
          playing={active && !paused}
          onPlay={onPlay}
          onPause={onPause}
          onLoop={onLoop}
        />

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
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').width
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
