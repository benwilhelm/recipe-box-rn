const GOT_RECIPES = "GOT_RECIPES"
const NEXT_RECIPE = "NEXT_RECIPE"
const LAST_RECIPE = "LAST_RECIPE"

const recipes = {
  all: [],
  suggested: undefined
}

// Action creators
const gotRecipes = (recipes) => ({
  type: GOT_RECIPES,
  recipes
})

const nextRecipe = () => ({
  type: NEXT_RECIPE
})

const lastRecipe = () => ({
  type: LAST_RECIPE
})


// Thunk Creators
export const getRecipes = () => dispatch => {
  let recipes = require('./recipes.json')
  setTimeout(() => {
    dispatch(gotRecipes(recipes))
  }, 100)
}


const reducer = (state=recipes, action) => {
  let newState = Object.assign({}, state)
  switch (action.type) {
    case GOT_RECIPES:
      newState.all = action.recipes
      break
    case NEXT_RECIPE:
      if (state.all.length) {
        let current = state.suggested || 0
        let next = current + 1
        newState.suggested = Math.min(state.all.length-1, next)
      }
      break
    case LAST_RECIPE:
      if (state.all.length) {
        let current = state.suggested || 0
        let next = current - 1
        newState.suggested = Math.max(next, 0)
      }
      break
    default:
      return newState
  }
}

export default reducer
