import React from 'react';
import {Text, View, StyleSheet, Image, ImageBackground} from 'react-native';
import {colors, commonContainerStyle, images} from '../../Utilis/theme';
import {strings} from '../../Utilis/en';
import {useNavigation} from '@react-navigation/native';
import VoiceHeader from '../../components/Header/VoiceHeader';
import {ScrollView} from 'react-native-gesture-handler';
import Devider from '../../components/Devider/Devider';
import styles from './Style';
const TranslationScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={commonContainerStyle.container}>
      <VoiceHeader
        icon={images.back}
        icon2={images.upload}
        onPress={() => navigation.navigate('HomeScreen')}
        menu={true}
      />
      <ScrollView>
        <View style={styles.header4}>
          <View style={styles.header3}>
            <Image source={images.play} style={styles.icon2} />
            <Text style={styles.smallText}>{strings.recordTime}</Text>
          </View>
          <Text style={styles.mediumText}>{strings.howDid}</Text>
        </View>
        <View style={styles.header4}>
          <Devider />
        </View>
        <View style={styles.header4}>
          <View style={styles.header3}>
            <Image source={images.play} style={styles.icon2} />
            <Text style={styles.smallText}>{strings.recordTime}</Text>
          </View>
          <Text style={styles.mediumText}>{strings.doYou}</Text>
        </View>
        <Image source={images.timeLione} style={styles.icon3} />
      </ScrollView>
      <View style={styles.header2}>
        <ImageBackground source={images.bar} style={styles.background}>
          <View style={styles.container}>
            <Image source={images.reverse} style={styles.icon} />
            <View style={styles.iconContainer}>
              <Image source={images.record} style={styles.nestedImage} />
              <Image source={images.forward} style={styles.icon} />
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default TranslationScreen;
