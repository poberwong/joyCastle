import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Color } from '../helpers/Constants'

/**
 * Created by poberwong on 2019-05-22.
 */

export default class Settings extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.hinter}>I'm Tab2</Text>
      </View>
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
  }
})
