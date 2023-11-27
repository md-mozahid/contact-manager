const addUser = (name, email) => {
  dispatch({
    type: 'added',
    id: nextId++,
    name,
    email,
  })
}

const deleteUser = (userId) => {
  dispatch({
    type: 'delete',
    id: userId,
  })
}
