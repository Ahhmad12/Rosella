import React from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';
import {commonContainerStyle, images} from '../../Utilis/theme';
import {strings} from '../../Utilis/en';
import {useNavigation} from '@react-navigation/native';
import VoiceHeader from '../../components/Header/VoiceHeader';
import {ScrollView} from 'react-native-gesture-handler';
import Devider from '../../components/Devider/Devider';
import styles from './Style';
const VoiceRecord = () => {
  const navigation = useNavigation();
  return (
    <View style={commonContainerStyle.container}>
      <VoiceHeader
        icon={images.back}
        icon2={images.menu2}
        title={strings.voiceRecord}
        onPress={() => navigation.navigate('HomeScreen')}
        menu={true}
      />
      <Devider />
      <ScrollView>
        <View style={styles.header}>
          <Image style={styles.iconStyle} source={images.logo} />
          <Text style={styles.bigText}>{strings.time}</Text>
        </View>
        <View style={styles.header1}>
          <Image style={styles.iconStyle2} source={images.voice} />
        </View>
      </ScrollView>
      <View style={styles.header2}>
        <ImageBackground source={images.bar} style={styles.background}>
          <View style={styles.container}>
            <Image source={images.tick} style={styles.icon} />
            <View style={styles.iconContainer}>
              <Image source={images.record} style={styles.nestedImage} />
              <Image source={images.cross} style={styles.icon} />
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default VoiceRecord;
