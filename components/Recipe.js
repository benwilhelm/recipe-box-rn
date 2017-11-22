import React from 'react'
import { View, Text } from 'react-native'

export default (props) => {
  const recipe = props.recipe || {}
  return (
    <View style={props.style}>
      <Text style={{ fontSize: 36, textAlign: 'center' }}>{recipe.name}?</Text>
    </View>
  )
}
