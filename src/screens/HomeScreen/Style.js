import React from 'react';
import {StyleSheet} from 'react-native';
import {screenHeightPer, screenWidthPer} from '../../Utilis/Dimensions';
import {colors} from '../../Utilis/theme';
export default StyleSheet.create({
  iconStyle: {
    width: screenWidthPer * 11.77,
    height: screenHeightPer * 5.8,
  },
  iconStyle1: {
    width: screenHeightPer * 1.9,
    height: screenHeightPer * 2.1,
    marginRight: '2%',
  },

  iconStyle2: {
    width: screenHeightPer * 1.95,
    height: screenHeightPer * 2.19,
    marginRight: '2%',
  },
  iconStyle3: {
    width: screenHeightPer * 13,
    height: screenHeightPer * 13,
  },
  iconStyle4: {
    width: screenHeightPer * 35,
    height: screenHeightPer * 5,
  },
  iconStyle5: {
    width: screenWidthPer * 11.5,
    height: screenHeightPer * 5.7,
  },
  iconStyle6: {
    height: screenHeightPer * 1.5,
    width: screenWidthPer * 2.52,
    position: 'absolute',
  },
  bigText: {
    fontSize: 14,
    color: colors.black,
    fontWeight: 500,
  },
  header2: {
    flexDirection: 'row',
    backgroundColor: colors.lightGray,
    paddingVertical: '3%',
    paddingHorizontal: '5%',
    marginHorizontal: '3%',
    marginVertical: '2%',
    borderRadius: 22,
  },
  header3: {
    flexDirection: 'row',
    paddingVertical: '4%',
  },
  header4: {
    paddingHorizontal: '3%',
  },
  header5: {
    alignItems: 'center',
    paddingVertical: '1%',
  },
  header7: {
    backgroundColor: colors.blue,
    height: screenHeightPer * 7,
    width: screenWidthPer * 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header8: {
    backgroundColor: colors.semiGray,
    height: screenHeightPer * 7,
    width: screenWidthPer * 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header9: {
    backgroundColor: colors.red,
    height: screenHeightPer * 7,
    width: screenWidthPer * 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header10: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header6: {
    flexDirection: 'row',
    paddingVertical: '3%',
    marginVertical: '2%',
    paddingHorizontal: '3%',
  },
  smallText: {
    fontSize: 12,
    color: colors.gray,
    marginRight: '8%',
  },
  smallText2: {
    fontSize: 12,
    color: colors.gray,
    fontWeight: 400,
  },
  smallText3: {
    fontSize: 12,
    color: colors.white,
    fontWeight: 400,
  },
});
