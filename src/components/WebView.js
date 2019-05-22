/**
 * Created by poberwong on 2019-05-22.
 */

import React, { Component } from 'react'
import { View, ActivityIndicator, ViewPropTypes } from 'react-native'
import WebView from 'react-native-webview'
import PropTypes from 'prop-types'

export default class extends Component {
  static propTypes = {
    source: PropTypes.object,
    style: ViewPropTypes.style
  }

  constructor (props) {
    super(props)
    this.state = {
      loading: !!props.source
    }
  }

  _onLoadEnd = () => {
    this.setState({loading: false})
  }

  render () {
    const {loading} = this.state
    const {style, ...rest} = this.props

    return (
      <View style={[{flex: 1}, style]}>
        <WebView
          style={{flex: 1}}
          javaScriptEnabled
          allowUniversalAccessFromFileURLs
          allowsInlineMediaPlayback
          onLoadEnd={this._onLoadEnd}
          originWhitelist={['file://', 'http://', 'https://']}
          {...rest}
        />
        {
          loading &&
          <ActivityIndicator
            size='small'
            style={{position: 'absolute', alignSelf: 'center', top: '50%'}} />
        }
      </View>
    )
  }
}
