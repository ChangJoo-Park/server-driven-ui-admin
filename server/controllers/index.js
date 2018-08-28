const { Screen, Widget } = require('../models/index')
/*
 * Screens
 */
exports.getScreens = (req, res) => {
  Screen.find().then(result => {
    res.json(result)
  })
}

exports.getScreenById = (req, res) => {
  Screen.findById(req.params['id']).then(result => {
    res.json(result)
  })
}

exports.updateScreenById = async (req, res, next) => {
  try {
    const screenId = req.params['id']
    const { widgets } = req.body
    const targetScreen = await Screen.findById(req.params['id'])
    targetScreen.widgets = widgets
    const updatedScreen = await targetScreen.save()
    return res.json(updatedScreen)
  } catch (error) {
    next(error)
  }
}

exports.deleteScreenById = (req, res) => {
  return res.json()
}

exports.createScreen = (req, res) => {
  const body = req.body
  const newScreen = new Screen(body)
  newScreen.save().then(result => {
    return res.json(result)
  })
}
/*
 * Widgets
 */
exports.getWidgets = (req, res) => {
  Widget.find().then(result => {
    res.json(result)
  })
}

exports.getWidgetById = (req, res) => {
  Widget.findById(req.params['id']).then(result => {
    res.json(result)
  })
}

exports.updateWidgetById = (req, res) => {
  return res.json({})
}

exports.deleteWidgetById = (req, res) => {
  return res.json()
}

exports.createWidget = (req, res) => {
  const body = req.body
  const newWidget = new Widget(body)
  newWidget.save().then(result => {
    return res.json(result)
  })
}
