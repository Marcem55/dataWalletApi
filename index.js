const server = require('./src/app.js')
const { conn, Country } = require('./src/db.js')
const axios = require('axios')

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    console.log('Listening at 3001') // eslint-disable-line no-console
  })
})