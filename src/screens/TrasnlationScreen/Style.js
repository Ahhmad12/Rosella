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

  smallText: {
    fontSize: 12,
    color: colors.black,
    paddingHorizontal: '2%',
  },
  mediumText: {
    fontSize: 18.5,
    fontWeight: 400,
    color: colors.black,
    paddingVertical: '10%',
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
    width: screenWidthPer * 30,
    height: screenHeightPer * 15,
    marginRight: '8%',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 45,
    height: 45,
  },
  icon2: {
    width: 25,
    height: 25,
  },
  icon3: {
    width: '100%',
    height: 31,
  },
  header2: {
    alignItems: 'center',
    paddingVertical: '2%',
  },
  header1: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: '13%',
  },
  header3: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header4: {
    paddingHorizontal: '5%',
    paddingVertical: '2%',
  },
});
