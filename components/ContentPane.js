import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Route } from 'react-router-native'
import RecipeGroup from './RecipeGroup'

export default () => {
  return (
    <View style={styles.content}>
      <Route path="/groups/:groupId" component={RecipeGroup} />
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee'
  }
})
