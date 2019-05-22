import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Tab1 from './pages/Tab1'
import Tab2 from './pages/Tab2'

const TabNavigator = createBottomTabNavigator({
  Tab1: Tab1,
  Tab2: Tab2
})

export default createAppContainer(TabNavigator)
