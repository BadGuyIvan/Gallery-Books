const moviesFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_FILTER_BY_GENRE':
      return {...action}
    case 'SET_SEARCH':
      return {...action}
    default:
      return state
  }
}

export default moviesFilter

