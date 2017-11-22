import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { Link } from 'react-router-native'
const DIMS = Dimensions.get('window')

export default (props) => {
  const groups = props.groups || []
  const tabWidth = DIMS.width / groups.length
  return (
    <View style={styles.container} >
      {groups.map(group => {
        return (
          <Link key={group.id} style={{ width: tabWidth }} to={`/groups/${group.id}`}>
            <Text style={styles.tab}>{group.name}</Text>
          </Link>
        )
      })}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 90
  },

  tab: {
    flex: 1,
    textAlign: 'center',
    padding: 15
  }
})
