import React from 'react';
import { StyleSheet,Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
// import { createBottomTabNavigator } from 'react-navigation-tabs'
import AllScreen from './screens/AllScreen'
import ActiveScreen from './screens/ActiveScreen'
import CompleteScreen from './screens/CompleteScreen'
import SingleTodoScreen from './screens/SingleTodoScreen '
import TabBarIcon from './component/TabBarIcon';
const AllStack = createStackNavigator({
    AllScreen,
    SingleTodoScreen
   },
   {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   }
)
AllStack.navigationOptions = {
  tabBarLabel: 'All',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-add-circle${focused ? '' : '-outline'}`
          : 'md-add-circle'
      }
    />
  ),
  
};
const ActiveStack = createStackNavigator({
    ActiveScreen  
 },{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }
)

ActiveStack.navigationOptions = {
  tabBarLabel: 'Active',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-settings'
          : 'md-settings'
      }
    />
  ),
  
};
const CompleteStack = createStackNavigator({
    CompleteScreen
 },
 {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }
)
CompleteStack.navigationOptions = {
  tabBarLabel: 'Complete',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-checkmark-circle${focused ? '' : '-outline'}`
          : 'md-checkmark-circle'
      }
    />
  ),
};

const TabNavigator = createBottomTabNavigator({
  AllStack,
  ActiveStack,
  CompleteStack
})



export default createAppContainer(TabNavigator)

