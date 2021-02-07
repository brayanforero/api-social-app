const express = require('express')
const app = express()

// SETTINGS
app.set('port', process.env.PORT || 3000)

// MIDDLEWARES

// ROUTES
app.use('/posts', require('./Routes/Pots'))

// HANDDLER DEFAULT
app.use((req, res) => {
  res.send('404 NOT FOUND')
})
// SERVER LISTENING
app.listen(app.get('port'), () => {
  console.log(`SERVER ON PORT ${app.get('port')}`)
})
