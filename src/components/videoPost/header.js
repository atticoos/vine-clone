import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import Avatar from '../avatar';

export default function PostHeader ({user, postTime, loops, style}) {
  return (
    <View style={[styles.container, style]}>
      <Profile user={user} postTime={postTime} />
      <Loops count={loops} />
    </View>
  );
}

function Profile ({user, postTime}) {
  return (
    <View style={styles.profileContainer}>
      <Avatar
        style={styles.avatar}
        url={user.avatarUrl}
      />
      <View style={styles.profileInfo}>
        <Text style={styles.userName}>{user.username}</Text>
        <Text style={styles.postTime}>{postTime.format('hh:mma')}</Text>
      </View>
    </View>
  );
}

function Loops ({count}) {
  return (
    <View style={styles.loopContainer}>
      <Text style={styles.loopsCount}>{count}</Text>
      <Text style={styles.loopsLabel}>Loops</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {

  },
  profileInfo: {
    marginLeft: 10,
  },
  userName: {
    color: 'green',
    fontSize: 16,
    marginBottom: 2
  },
  postTime: {
    color: 'gray',
    fontSize: 12
  },
  loopContainer: {

  },
  loopsCount: {
    fontSize: 18,
    marginBottom: 2
  },
  loopsLabel: {
    color: 'gray',
    fontSize: 12
  }
});
