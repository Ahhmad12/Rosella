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
import {strings} from '../../Utilis/en';

export default function CommonHeader({icon, onPress, title}) {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={onPress}>
          <Image style={styles.icon} source={icon} resizeMode="center" />
        </TouchableOpacity>
        <Text style={styles.headerText}>{title}</Text>
        <View style={{width: 50}} />
      </View>
      <Devider />
      <View style={styles.header2}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.contentContainer}>
          <InputField
            issearch={true}
            height={screenHeightPer * 6}
            placeholder={strings.search}
            borderColor={colors.gray2}
            borderRadius={25}
            borderWidth={1}
            width={screenWidthPer * 80}
          />
        </KeyboardAvoidingView>
        <View style={styles.header3}>
          <Image style={styles.icon} source={images.menu} />
        </View>
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
    backgroundColor: colors.white,
  },
  header2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  header3: {
    backgroundColor: colors.white,
  },
});
