const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('Hello World!  To My Technophile Family. I have Made Cheanges here')
})
app.listen(port, () => {
  console.log(`Hello World App listening on port ${port}`)
})