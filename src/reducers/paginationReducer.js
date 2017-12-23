const paginationReducer = (state = {perpage: 3}, action) => {
  switch (action.type) {
    case 'SET_PERPAGE' : 
      return {...state, perpage: action.perpage}
    default:
      return state
  }
}

export default paginationReducer