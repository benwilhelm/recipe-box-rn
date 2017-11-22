const GOT_RECIPES = "GOT_RECIPES"

const recipes = []

// Action creators
const gotRecipes = (recipes) => ({
  type: GOT_RECIPES,
  recipes
})

// Thunk Creators
export const getRecipes = () => dispatch => {
  let recipes = require('./recipes.json')
  setTimeout(() => {
    dispatch(gotRecipes(recipes))
  }, 100)
}


const reducer = (state=recipes, action) => {
  switch (action.type) {
    case GOT_RECIPES:
      return action.recipes
      break
    default:
      return state
  }
}

export default reducer
