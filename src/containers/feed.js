import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text
} from 'react-native';
import Screen from '../components/screen';
import Video from 'react-native-video';

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
        <Text>Hello World</Text>
        <Video
          source={{isNetwork: false, uri: "https://mtc.cdn.vine.co/r/videos_h264dash/D8525D0D1D1369940302944940032_530b952d5b9.25.2.B4533719-F575-40A4-9B00-BE8020CC54D5.mp4"}}
          style={styles.video}
          {...this.state}
          onLoad={load => console.log('loaded', load)}
          onError={error => console.log('error', error)}
        />
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

export default Feed;
