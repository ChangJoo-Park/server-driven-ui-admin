
const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const {
  getScreens, getScreenById, updateScreenById, deleteScreenById, createScreen,
  getWidgets, getWidgetById, updateWidgetById, deleteWidgetById, createWidget
} = require('./controllers')
const app = express()
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Screens
  app.get('/api/screens', getScreens)
  app.get('/api/screens/:id', getScreenById)
  app.post('/api/screens', createScreen)
  app.patch('/api/screens/:id', updateScreenById)
  app.delete('/api/screens/:id', deleteScreenById)

  // Widgets
  app.get('/api/widgets', getWidgets)
  app.get('/api/widgets/:id', getWidgetById)
  app.post('/api/widgets', createWidget)
  app.patch('/api/widgets/:id', updateWidgetById)
  app.delete('/api/widgets/:id', deleteWidgetById)

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  mongoose
    .connect('mongodb://localhost/sdui', { useNewUrlParser: true })
    .then(_ => {
      console.log('Connected MongoDB')
    })
  console.log('Server listening on http://' + host + ':' + port) // eslint-disable-line no-console
}

start()
