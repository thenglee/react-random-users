import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import store from './store/store'
import { addUsers } from './actions/users'
import Header from './components/Header'

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/users').then(response => {
      console.log(response.data)
      store.dispatch(addUsers(response.data.results))
    })
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
