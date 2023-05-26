import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {colors, commonContainerStyle, images} from '../../Utilis/theme';
import {strings} from '../../Utilis/en';
import {screenHeightPer, screenWidthPer} from '../../Utilis/Dimensions';
import {useNavigation} from '@react-navigation/native';
import VoiceHeader from '../../components/Header/VoiceHeader';
import {ScrollView} from 'react-native-gesture-handler';
import Devider from '../../components/Devider/Devider';
import Button from '../../components/Buttons/Button';
import styles from './Style';
const PrivacyScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={commonContainerStyle.container}>
      <VoiceHeader
        icon={images.back}
        onPress={() => navigation.navigate('HomeScreen')}
        menu={true}
      />
      <Devider />
      <ScrollView>
        <View style={styles.header3}>
          <Text style={styles.bigText}>{strings.privacyPolicy}</Text>
          <View style={styles.header}>
            <Button
              title={strings.humanFriendly}
              fontSize={16}
              backgroundColor={colors.darkRed}
              borderRadius={30}
              width={screenWidthPer * 45}
              height={screenHeightPer * 6.5}
            />
            <Button
              title={strings.legalPolicy}
              fontSize={16}
              backgroundColor={colors.lightGray}
              borderRadius={30}
              textColor={colors.darkRed}
              width={screenWidthPer * 45}
              height={screenHeightPer * 6.5}
            />
          </View>
          <View style={styles.header2}>
            <Text style={styles.mediumText}>{strings.loremIpsum}</Text>
          </View>
          <Text style={styles.smallText}>{strings.updated}</Text>
          <View style={styles.header4}>
            <Text style={styles.mediumText}>{strings.loremIpsum}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PrivacyScreen;
