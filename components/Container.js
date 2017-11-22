import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import ContentPane from './ContentPane'
import GroupNav from './GroupNav'
import { getGroups, getRecipes } from '../store'
import { NativeRouter as Router } from 'react-router-native'

class Container extends React.Component {

  componentDidMount() {
    this.props.fetchGroups()
    this.props.fetchRecipes()
  }

  render() {
    const {groups} = this.props
    return (
      <View style={styles.container}>
        <Router>
          <View>
            <ContentPane />
            <GroupNav groups={groups} />
          </View>
        </Router>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const mapState = (state) => {
  return {
    groups: state.groups
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchGroups:  () => dispatch(getGroups()),
    fetchRecipes: () => dispatch(getRecipes())
  }
}

export default connect(mapState, mapDispatch)(Container)
