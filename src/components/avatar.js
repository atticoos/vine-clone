import React from 'react';
import {
  Image,
  StyleSheet,
  View
} from 'react-native';

export default function Avatar ({url: uri, size = 40}) {
  return (
    <View style={[styles.container, containerSize(size)]}>
      <Image
        source={{uri}}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
}

const containerSize = size => ({
  height: size,
  width: size,
  borderRadius: size / 2
});

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden'
  },
  image: {
    height: 80,
    width: 80
  }
});
