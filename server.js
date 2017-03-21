/* eslint-disable no-console, no-var */
const express = require('express')

const app = express()
const path = require('path')
const outputDir = path.join(__dirname, '/build/')

app.use(express.static(outputDir))
app.listen(3000, function () {
  console.log('Server listening on http://localhost:3000, Ctrl+C to stop')
})
