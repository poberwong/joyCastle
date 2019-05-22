import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import React, { Component } from 'react'
import SplashScreen from 'react-native-splash-screen'
import Tab1 from './pages/Tab1'
import Tab2 from './pages/Tab2'

export default class extends Component {
  componentWillMount () {
    setTimeout(() => {
      SplashScreen.hide()
    }, 3000)
  }

  render () {
    const App = createAppContainer(
      createBottomTabNavigator({
        Tab1: Tab1,
        Tab2: Tab2
      }))
    return <App />
  }
}
