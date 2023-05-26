import React from 'react';
import {StyleSheet} from 'react-native';
import {screenHeightPer, screenWidthPer} from '../../Utilis/Dimensions';
import {colors} from '../../Utilis/theme';
export default StyleSheet.create({
  bigText: {
    color: colors.black,
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: '2%',
  },
  mediumText: {
    fontSize: 16.5,
    color: colors.black,
  },
  smallText: {
    fontSize: 14,
    color: colors.gray,
    paddingTop: '5%',
  },
  header: {
    flexDirection: 'row',
    paddingBottom: '10%',
  },
  header2: {
    backgroundColor: colors.lightGray,
    borderRadius: 20,
    padding: 15,
  },
  header3: {
    padding: 20,
  },
  header4: {
    borderRadius: 20,
    padding: 15,
  },
});
