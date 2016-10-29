import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text
} from 'react-native';
import Video from 'react-native-video';

class VideoPost extends React.Component {
  render () {
    var {
      video,
      style
    } = this.props;
    return (
      <View style={[styles.container, style]}>
        <Image
          source={{uri: video.thumbnailUrl}}
          style={styles.thumbnail}
          onError={er => console.log('er', er.nativeEvent)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red'
  },
  thumbnail: {
    height: 400,
    width: 400
  }
});

export default VideoPost;
