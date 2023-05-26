import React from 'react';
import {StyleSheet} from 'react-native';
import {screenHeightPer, screenWidthPer} from '../../Utilis/Dimensions';
import {colors} from '../../Utilis/theme';
export default StyleSheet.create({
  iconStyle2: {
    width: screenHeightPer * 45,
    height: screenHeightPer * 20,
  },
  iconStyle: {
    width: screenHeightPer * 35,
    height: screenHeightPer * 35,
  },

  bigText: {
    fontSize: 60,
    color: colors.gray3,
    fontWeight: 400,
  },

  header: {
    alignItems: 'center',
    paddingVertical: '2%',
  },

  background: {
    justifyContent: 'space-around',
    alignContent: 'center',
    width: screenWidthPer * 73,
    height: 60,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    position: 'relative',
  },
  nestedImage: {
    position: 'absolute',
    width: screenWidthPer * 36,
    height: screenHeightPer * 12,
    marginTop: '-35%',
    marginLeft: '-240%',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 45,
    height: 45,
  },
  header2: {
    alignItems: 'center',
    paddingVertical: '3%',
  },
  header1: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: '13%',
  },
});
