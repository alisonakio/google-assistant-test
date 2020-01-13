const express = require('express')
const bodyParser = require('body-parser')
const { promisify } = require('util')
const webhook = require('webhook');

const app = express()
app.use(bodyParser.json())

app.get('/', (req,res)=>{
    console.log('Default route');
    res.send('Google Assistant Test');
})

const startServer = async () => {
  const port = process.env.PORT || 8080
  await promisify(app.listen).bind(app)(port)
  console.log(`Listening on port ${port}`)
}

startServer()