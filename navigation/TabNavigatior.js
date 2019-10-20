import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator,createAppContainer } from'react-navigation'
// import { createBottomTabNavigator } from 'react-navigation-tabs'
import AllScreen from '../screens/AllScreen'
import ActiveScreen from '../screens/ActiveScreen'
import CompleteScreen from '../screens/CompleteScreen'

const AllStack = createStackNavigator({
    AllScreen: {
        screen: AllScreen,
      },
   }
)
const ActiveStack = createStackNavigator({
    ActiveScreen: {
      screen: ActiveScreen,
    },
 }
)
const CompleteStack = createStackNavigator({
    CompleteScreen: {
      screen: CompleteScreen,
    },
 }
)

const TabNavigator = createBottomTabNavigator({
  AllStack,
  ActiveStack,
  CompleteStack
})



export default createAppContainer(TabNavigator)