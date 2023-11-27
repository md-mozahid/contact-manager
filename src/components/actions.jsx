export const addUser = (name, email) => {
  dispatch({
    type: 'added',
    id: nextId++,
    name,
    email,
  })
}

export const deleteUser = (userId) => {
  dispatch({
    type: 'delete',
    id: userId,
  })
}
