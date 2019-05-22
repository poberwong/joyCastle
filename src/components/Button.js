import React from 'react'
import PropTypes from 'prop-types'
import { Color, Size } from '../helpers/Constants'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ViewPropTypes,
  View
} from 'react-native'

export default function Button (props) {
  const {size, type, style, containerStyle, textStyle, title, leftView, rightView, disabled, ...others} = props

  const titleStyles = StyleSheet.create({
    large: {
      fontSize: Size.font.large
    },
    normal: {
      fontSize: Size.font.normal
    },
    small: {
      fontSize: Size.font.small
    },
    primary: {
      color: Color.button.font.primary
    },
    default: {
      color: Color.button.font.default
    },
    danger: {
      color: Color.button.font.primary
    }
  })

  const typeStyles = {
    primary: {
    },
    default: {
      backgroundColor: Color.button.background.default
    },
    danger: {
      backgroundColor: Color.button.background.danger
    },
    disabled: {
      backgroundColor: Color.button.background.disabled
    }
  }

  return (
    <TouchableOpacity
      {...others}
      disabled={disabled}
      style={[
        buttonStyles.basic,
        buttonStyles[size],
        disabled ? typeStyles.disabled : typeStyles[type],
        style]}>
      <View style={[buttonStyles.container, containerStyle]}>
        <View style={{flex: 1}}>{leftView}</View>
        <Text style={[titleStyles[size], titleStyles[type], textStyle]}>
          {title}
        </Text>
        <View style={{flex: 1}}>{rightView}</View>
      </View>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  title: PropTypes.string,
  style: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  leftView: PropTypes.any,
  rightView: PropTypes.any,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['primary', 'default', 'danger']),
  size: PropTypes.oneOf(['large', 'normal', 'small'])
}

Button.defaultProps = {
  type: 'default',
  size: 'normal'
}

const buttonStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  basic: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  large: {
    height: 60,
    borderRadius: 3
  },
  normal: {
    height: 40,
    borderRadius: 3
  },
  small: {
    height: 30,
    borderRadius: 3
  }
})
