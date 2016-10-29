import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import Video from 'react-native-video';

export default function VineVideo ({url: uri, onPress, ...props}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Video
        source={{uri}}
        {...props}
      />
    </TouchableWithoutFeedback>
  );
}

VineVideo.defaultProps = {
  rate: 1,
  volume: 1,
  repeat: true,
  muted: false,
  paused: false,
  controls: false,
  skin: 'custom'
};
