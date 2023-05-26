import React, {useEffect} from 'react';
import {
  StatusBar,
  useColorScheme,
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Index from './src/navigation/Index';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {colors} from './src/Utilis/theme';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : colors.white,
  };
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, {backgroundColor}]}>
      <SafeAreaView>
        <StatusBar
          translucent
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
      </SafeAreaView>
    </View>
  );
  return (
    <View style={{flex: 1}}>
      <MyStatusBar backgroundColor={colors.white} barStyle="light-content" />
      <Index />
    </View>
  );
};

export default App;
const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: '#79B45D',
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
});
