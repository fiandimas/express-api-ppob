const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req,res) => {
  const data = {
    status: 'success',
    code: 200,
    data: [

    ]
  }

  res.json(data)
})

app.listen(3000, () => {
  console.log('Server listening on localhot:3000')
})