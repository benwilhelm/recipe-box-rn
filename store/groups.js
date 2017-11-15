
// initial state
const groups = []

const GOT_GROUPS = 'GOT_GROUPS'

const gotGroups = (groups) => ({
  type: GOT_GROUPS,
  groups
})



// Thunk Creators
export const getGroups = () => dispatch => {
  let groups = require('./groups.json')
  setTimeout(() => {
    dispatch(gotGroups(groups))
  }, 100)
}



const reducer = (state=groups, action) => {
  switch(action.type) {
    case GOT_GROUPS:
      return action.groups
      break
    default:
      return state
  }
}

export default reducer
