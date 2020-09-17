const express = require('express')
const axios = require('axios')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/', (req, res) => {
  res.send('<h1>Home page</h1>')
})

app.get('/users', (req, res) => {
  axios.get('https://randomuser.me/api/?page=1&results=10').then(response => {
    res.send(response.data)
  })
})

app.listen(port, () => {
  console.log('Server started on port 3000')
})
