import { createStore } from 'redux'
import usersReducer from '../reducers/users'

const store = createStore(usersReducer)

store.subscribe(() => {
  console.log('Store data:', store.getState())
})

export default store
