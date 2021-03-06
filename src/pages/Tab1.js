import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import WebView from '../components/WebView'
import Button from '../components/Button'
import Overlay from 'teaset/components/Overlay/Overlay'
import PropTypes from 'prop-types'
import { Color } from '../helpers/Constants'

/**
 * Created by poberwong on 2019-05-22.
 */

export default class HomeScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  }

  _preview = () => {
    Overlay.show(this.renderOverlay())
  }

  _goTab2 = () => {
    this.props.navigation.navigate('Tab2')
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.hinter}>I'm Tab1, Look, there is a button</Text>
        <Button style={styles.preview} onPress={this._preview} title='Preview' />
      </View>
    )
  }

  renderOverlay () {
    return (
      <Overlay.View
        animated
        style={styles.overlay}
        onDisappearCompleted={this._goTab2}
      >
        <WebView source={{uri: 'https://xkcd.com'}} />
      </Overlay.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.app.background
  },
  hinter: {
    lineHeight: 30,
    fontSize: 14
  },
  preview: {
    paddingHorizontal: 25,
    paddingVertical: 8
  },
  overlay: {
    margin: 50
  }
})
