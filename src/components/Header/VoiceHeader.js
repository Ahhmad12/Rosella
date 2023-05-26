import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import {colors, images} from '../../Utilis/theme';
import Devider from '../Devider/Devider';
import InputField from '../TextInput/inputField';
import {screenHeightPer, screenWidthPer} from '../../Utilis/Dimensions';

export default function VoiceHeader({icon, icon2, onPress, title}) {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={onPress}>
          <Image style={styles.icon} source={icon} resizeMode="center" />
        </TouchableOpacity>
        <Text style={styles.headerText}>{title}</Text>
        <Image style={styles.icon} source={icon2} resizeMode="center" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.black,
    lineHeight: 33,
  },
  icon: {
    width: screenWidthPer * 12.2,
    height: screenHeightPer * 6,
  },
  header2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  header3: {},
});
