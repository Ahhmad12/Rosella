import {StyleSheet} from 'react-native';

export const colors = {
  black: '#343434',
  gray: '#858C94',
  lightGray: '#F9F9F9',
  semiGray: '#D3D3D3',
  white: '#FFFFFF',
  gray2: '#E4E4E4',
  blue: '#2E2EFF',
  gray3: '#858283',
  red: '#FF0000',
  darkRed: '#C70039',
};
export const images = {
  Sidebar: require('../assets/Logos/Sidebar.png'),
  Slide: require('../assets/Logos/slide.png'),
  search: require('../assets/Logos/search2.png'),
  play: require('../assets/Logos/Play2.png'),
  time: require('../assets/Logos/time.png'),
  callender: require('../assets/Logos/callender.png'),
  logo: require('../assets/Logos/logo.png'),
  menu: require('../assets/Logos/menu.png'),
  audio: require('../assets/Logos/audio.png'),
  oval: require('../assets/Logos/Oval.png'),
  icon: require('../assets/Logos/Icon.png'),
  back: require('../assets/Logos/backIcon.png'),
  menu2: require('../assets/Logos/menu2.png'),
  voice: require('../assets/Logos/voice.png'),
  bar: require('../assets/Logos/bar.png'),
  record: require('../assets/Logos/startRecord.png'),
  cross: require('../assets/Logos/cross.png'),
  tick: require('../assets/Logos/tick.png'),
  reverse: require('../assets/Logos/reverse.png'),
  forward: require('../assets/Logos/forward.png'),
  upload: require('../assets/Logos/upload.png'),
  timeLione: require('../assets/Logos/timeLine.png'),
};

export const commonContainerStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  heading1: {
    fontSize: 16,
    color: colors.black,
    fontWeight: '400',
    marginVertical: '5%',
  },
});
