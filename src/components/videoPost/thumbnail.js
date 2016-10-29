import React from 'react';
import {
  TouchableWithoutFeedback,
  Image
} from 'react-native';

export default function PostThumbnail ({onPress, style, url}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Image
        style={style}
        source={{uri: url}}
      />
    </TouchableWithoutFeedback>
  );
}
