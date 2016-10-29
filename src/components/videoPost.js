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
    console.log('das video', video)
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

/*

<Video
  source={{isNetwork: false, uri: "https://mtc.cdn.vine.co/r/videos_h264dash/D8525D0D1D1369940302944940032_530b952d5b9.25.2.B4533719-F575-40A4-9B00-BE8020CC54D5.mp4"}}
  style={styles.video}
  {...this.state}
  onLoad={load => console.log('loaded', load)}
  onError={error => console.log('error', error)}
/>
 */

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
