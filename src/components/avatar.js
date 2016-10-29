import React from 'react';
import {
  Image,
  StyleSheet,
  View
} from 'react-native';

export default function Avatar ({url: uri, size = 40}) {
  return (
    <View style={[styles.container, dimensions(size)]}>
      <Image
        source={{uri}}
        style={dimensions(size)}
        resizeMode="contain"
      />
    </View>
  );
}

const dimensions = size => ({
  height: size,
  width: size,
  borderRadius: size / 2
});

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden'
  }
});
