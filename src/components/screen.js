import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Colors from '../constants/colors';

function Screen ({children, style}) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        <View />
        <Logo />
        <View />
      </View>
      {children}
    </View>
  );
}

function Logo () {
  return (
    <View style={styles.logo}>
      <Text style={styles.logoText}>I</Text>
      <Image
        source={require('../assets/icon.png')}
        style={styles.icon}
        resizeMode="contain"
      />
    <Text style={styles.logoText}>U</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: Colors.Green.NORMAL,
    paddingTop: 20,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    width: 30,
    height: 30
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 85
  },
  logoText: {
    fontSize: 36,
    color: '#fff',
    fontWeight: '600'
    // fontWeight: 'bold'
  }
});

export default Screen;
