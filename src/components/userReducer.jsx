const userReducer = (users, action) => {
  if (action.type === 'added') {
    return [
      ...users,
      {
        id: action.id,
        name: action.name,
        email: action.email,
      },
    ]
  } else if (action.type === 'delete') {
    return users.filter((user) => user.id !== action.id)
  } else {
    throw new Error('Unknown action: ' + action.type)
  }
}

export default userReducer
