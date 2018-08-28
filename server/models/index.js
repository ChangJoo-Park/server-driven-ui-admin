const mongoose = require('mongoose')
const Schema = mongoose.Schema

const widgetSchema = new Schema({
  name: {
    type: String, default: ''
  },
  description: {
    type: String, default: ''
  },
  type: {
    type: String, default: ''
  }
})

exports.Widget = mongoose.model('Widget', widgetSchema)

const screenSchema = new Schema({
  name: {
    type: String, default: ''
  },
  type: {
    type: String, default: '',
  },
  publishedAt: {
    type: Date, default: Date.now
  },
  widgets: [widgetSchema]
})

exports.Screen = mongoose.model('Screen', screenSchema)
