import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image, Pressable} from 'react-native';
import CommonHeader from '../../components/Header/CommonHeader';
import {commonContainerStyle, images} from '../../Utilis/theme';
import {strings} from '../../Utilis/en';
import {FlatList} from 'react-native-gesture-handler';
import data from '../../../data.json';
import {useNavigation} from '@react-navigation/native';
import {Swipeable} from 'react-native-gesture-handler';
import styles from './Style';
const HomeScreen = () => {
  const navigation = useNavigation();
  const [data1, setData1] = useState(data);

  const handleItemSelect = (itemId, check) => {
    const updatedData = data1.map(item => {
      if (check === true) {
        return {
          ...item,
          play: false,
        };
      } else {
        if (item.id === itemId) {
          return {
            ...item,
            play: true,
          };
        }
        return {
          ...item,
          play: false,
        };
      }
    });

    setData1(updatedData);
  };

  const rightSwipe = (progress, dragX, swipeable) => {
    const closeSwipeable = () => {
      swipeable.close();
      navigation.navigate('TranslationScreen');
    };
    return (
      <View style={styles.header6}>
        <TouchableOpacity style={styles.header7} onPress={closeSwipeable}>
          <Text style={styles.smallText3}>{strings.rename}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.header8} onPress={closeSwipeable}>
          <Text style={styles.smallText3}>{strings.select}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.header9} onPress={closeSwipeable}>
          <Text style={styles.smallText3}>{strings.Delete}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={commonContainerStyle.container}>
      <CommonHeader
        icon={images.Sidebar}
        title={strings.recordings}
        onPress={() => navigation.toggleDrawer()}
        search={true}
      />
      <View style={{flex: 1}}>
        <FlatList
          data={data1}
          renderItem={({item}) => (
            <Swipeable renderRightActions={rightSwipe}>
              <TouchableOpacity style={styles.header2}>
                <Pressable onPress={() => handleItemSelect(item.id, item.play)}>
                  {item.play ? (
                    <View style={styles.header10}>
                      <Image style={styles.iconStyle5} source={images.oval} />
                      <Image style={styles.iconStyle6} source={images.icon} />
                    </View>
                  ) : (
                    <Image style={styles.iconStyle} source={images.play} />
                  )}
                </Pressable>
                <View style={styles.header4}>
                  <Text style={styles.bigText}>{item.name}</Text>
                  <View style={styles.header3}>
                    <Image style={styles.iconStyle2} source={images.time} />
                    <Text style={styles.smallText}>{item.time}</Text>
                    <Image
                      style={styles.iconStyle1}
                      source={images.callender}
                    />
                    <Text style={styles.smallText}>{item.callender}</Text>
                  </View>
                  <View>
                    {item.play ? (
                      <Image style={styles.iconStyle4} source={images.audio} />
                    ) : null}
                  </View>
                </View>
              </TouchableOpacity>
            </Swipeable>
          )}
        />
      </View>
      <View style={styles.header5}>
        <Image style={styles.iconStyle3} source={images.logo} />
        <Text style={styles.smallText2}>{strings.tapRecord}</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
