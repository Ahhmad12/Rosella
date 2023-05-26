import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../../Utilis/theme';

export default function Devider({marginTop, marginBottom}) {
  const styles = StyleSheet.create({
    devider: {
      borderBottomWidth: 0.17,
      borderColor: colors.gray,
      alignItems: 'center',
      height: 1,
      marginTop: marginTop || 0,
      marginBottom: marginBottom || 0,
    },
  });
  return <View style={styles.devider} />;
}
