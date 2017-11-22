import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import Recipe from './Recipe'
import { connect } from 'react-redux'
import store from '../store'
import { shuffle } from 'lodash'

class RecipeGroup extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedRecipe: 0
    }

    this.next = this.next.bind(this)
  }

  next() {
    const recipes = this.props.recipes || []
    const sel = this.state.selectedRecipe
    let nextRecipe = (sel === recipes.length - 1) ? 0 : sel + 1;
    this.setState({ selectedRecipe: nextRecipe })
  }

  componentWillReceiveProps(nextProps) {
    // reset to beginning of list if switching groups
    if (nextProps.group.id !== this.props.group.id) {
      this.setState({ selectedRecipe: 0 })
    }
  }

  render() {
    const group  = this.props.group  || {}
    const rIdx   = this.state.selectedRecipe
    const recipe = this.props.recipes[rIdx] || {}

    return (
      <View style={styles.container}>
        <Text style={styles.groupHeading}>{group.name}</Text>
        <Recipe style={styles.recipe} recipe={recipe} />
        <Button color='#32711f' onPress={this.next} title='Nope.'></Button>
      </View>
    )
  }
}

const mapState = (state, ownProps) => {
  const groupId = +ownProps.match.params.groupId
  const group   = state.groups.find(group => group.id === groupId)
  const recipes = shuffle(state.recipes.filter(recipe => recipe.groupId === groupId))
  return {
    group,
    recipes
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    paddingTop: 50,
    padding: 15,
    flex: 1
  },

  groupHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center'
  },

  recipe: {
    flex: 1,
    padding: 50,
    justifyContent: 'center'
  }
})

export default connect(mapState)(RecipeGroup)
