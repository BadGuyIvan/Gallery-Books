export const setFilter = (filter, item) => ({
  type: 'SET_FILTER_BY_GENRE',
  filter,
  item
})

export const setSearch = (filter, search) => ({
  type: 'SET_SEARCH',
  filter,
  search
})


// export const setPagination = (select) => ({
//   type: 'SET_PAGINATION',
//   select
// })

export const setPerPage = (perpage) => ({
  type: 'SET_PERPAGE',
  perpage
})