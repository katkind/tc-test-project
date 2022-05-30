const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const indexRouter = require('./routes/index')
const imageRouter = require('./routes/image')
const app = express()

const host = process.env.host || '127.0.0.1'
const port = process.env.port || 3000
const allowOrigin = process.env.allowOrigin || 'http://localhost:4200'

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors({origin: allowOrigin}))
app.use('/api', indexRouter)
app.use('/images', imageRouter)
app.listen(port, host, () => {
	console.log(`app server listening http://${host}:${port}`)
})

module.exports = app
