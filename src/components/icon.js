import React from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

export default function Icon ({style, name}) {
  return (
    <Text style={[styles.text, style]}>{name}</Text>
  );
}

Icon.Name = {
  ALERT: '\ue001',
  ANDROID: '\ue002',
  APPLE: '\uE003',
  ARROW_LEFT: '\uE004',
  ARROW_RIGHT: '\uE005',
  AUDIO_OFF: '\uE006',
  AUDIO_ON: '\uE007',
  AUDIO_REMIX: '\uE008',
  CARROW: '\uE009',
  CARROW_LEFT: '\uE00A',
  CHECK_MARK: '\uE00B',
  CLOSE_FULLSCREEN: '\uE00C',
  CLOSE_X: '\uE00D',
  COMMENT: '\uE00E',
  COMMENT_STROKED: '\uE00F',
  COPY_URL: '\uE010',
  DOTS: '\uE011',
  DOTS_V: '\uE012',
  ELLIPSIS: '\uE013',
  EMAIL: '\uE014',
  EMBED: '\uE015',
  FACEBOOK: '\uE016',
  FEED: '\uE017',
  FIRE: '\uE018',
  FROWNY: '\uE019',
  FULLSCREEN: '\uE01A',
  GRID: '\uE01B',
  HEART_DOUBLETAP: '\uE01C',
  HEART: '\uE01D',
  INDEX: '\uE01E',
  LIKE: '\uE01F',
  LIKE_STROKED: '\uE020',
  LIST: '\uE021',
  LOCK: '\uE022',
  LOGOUT: '\uE023',
  LOGOUT2: '\uE024',
  LOOPS: '\uE025',
  MENU: '\uE026',
  MINIMIZE: '\uE027',
  MUSIC: '\uE028',
  PAUSE: '\uE029',
  PLAY: '\uE02A',
  PLUS: '\uE02B',
  POPULAR_NOW: '\uE02C',
  POST_ICON: '\uE02D',
  PROFILE: '\uE02E',
  REVINE: '\uE02F',
  REVINE_STROKED: '\uE030',
  REVINED: '\uE031',
  SEARCH: '\uE032',
  SELECT_DOWN_CARROT: '\uE033',
  SELECT_UP_CARROT: '\uE034',
  SETTINGS: '\uE035',
  SHARE_STROKED: '\uE036',
  SIMILAR_VINES: '\uE037',
  SMILEY: '\uE038',
  TAG: '\uE039',
  TRENDING: '\uE03A',
  TRENDS: '\uE03B',
  TV: '\uE03C',
  TWITTER: '\uE03D',
  UPLOAD_CLOSE: '\uE03E',
  UPLOAD_FILE: '\uE03F',
  UPLOAD_TRASH: '\uE040',
  V_LOGO: '\uE041',
  VENUE: '\uE042',
  VERIFIED: '\uE043',
  VINE_LOGO: '\uE044',
  WINDOWS_PHONE: '\uE045',
  X_MARK: '\uE046',
  KEY: '\uE047',
  KEY: '\uE048',
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'vine_actions',
    fontWeight: '700'
  }
})
