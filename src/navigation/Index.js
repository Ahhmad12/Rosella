import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen/Index';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomSidebarMenu from './sideBarMenu';
import {colors} from '../Utilis/theme';
import VoiceRecord from '../screens/VoiceRecordScreen/Index';
import TrashScreen from '../screens//TrashScreen/Index';
import TranslationScreen from '../screens/TrasnlationScreen/Index';
import PrivacyScreen from '../screens/PrivacyScreen/Index';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function FirstScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="TranslationScreen" component={TranslationScreen} />
    </Stack.Navigator>
  );
}
function SecondScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="VoiceMemos"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="VoiceMemos" component={VoiceRecord} />
    </Stack.Navigator>
  );
}
function ThirdScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="Trash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Trash" component={TrashScreen} />
    </Stack.Navigator>
  );
}
function ForthScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="PrivacyScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="PrivacyScreen" component={PrivacyScreen} />
    </Stack.Navigator>
  );
}
function Index() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}
        drawerContent={props => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="FirstScreenStack"
          options={{
            drawerLabel: 'Recordings',
            activeTintColor: colors.gray,
          }}
          component={FirstScreenStack}
        />
        <Drawer.Screen
          name="SecondScreenStack"
          options={{
            drawerLabel: 'Voice  Memos',
            activeTintColor: colors.gray,
          }}
          component={SecondScreenStack}
        />
        <Drawer.Screen
          name="ThirdScreenStack"
          options={{
            drawerLabel: 'Trash',
            activeTintColor: colors.gray,
          }}
          component={ThirdScreenStack}
        />
        <Drawer.Screen
          name="ForthScreenStack"
          options={{
            drawerLabel: 'Setting',
            activeTintColor: colors.gray,
          }}
          component={ForthScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default Index;
