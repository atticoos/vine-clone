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
        source={require('../assets/logo2.png')}
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
    width: 85,
    height: 28,
    marginTop: -4
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 130
  },
  logoText: {
    fontSize: 34,
    color: '#fff',
    fontWeight: '600'
    // fontWeight: 'bold'
  }
});

export default Screen;
