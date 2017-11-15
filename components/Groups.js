import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { groups, getGroups } from '../store'

class Groups extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchGroups()
  }

  render() {
    const {groups} = this.props
    return (
      <View>
        <Text>Groups</Text>
        {groups.map(group => {
          return <Text key={group.id}>{group.name}</Text>
        })}
      </View>
    )
  }
}

const mapState = (state) => {
  return { groups: state.groups }
}

const mapDispatch = dispatch => ({
  fetchGroups() {
    dispatch(getGroups())
  }
})

export default connect(mapState, mapDispatch)(Groups)
