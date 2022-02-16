const express = require('express')
let path = require('path')
let logger = require('morgan')
const swaggerUi = require('swagger-ui-express') // to bind swagger with express 
const swaggerJSDoc = require('swagger-jsdoc') // for API documentation
const colors = require('colors')
var timeout = require('connect-timeout')
//const errorHandler = require('./middleware/error')

const options = {
    definition:{
        openapi: '3.0.0',
        info: {
            title : 'Manticore API',
            version : '1.0.0'
        }
    },
    // path to the API DOCS
    apis:['./routes/index.js']
}


const swaggerSpec = swaggerJSDoc(options)

let dotEnv = require('dotenv')

dotEnv.config({path: './config/config.env'})

const indexRouter = require('./routes/index')

const app = express()
app.use(timeout('6000s'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(logger('dev'))
app.use((req, res, next) => {
    res.set('Cache-Control', process.env.CACHE_TYPE)
    next()
})
//app.use(errorHandler)
app.use('/api', indexRouter)
app.use('/api-documentation', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

let PORT = process.env.PORT || 3443
    app.listen(
        PORT,
        console.log(
            `Server running in ${process.env.NODE_ENV} node on port ${PORT}`.yellow.bold
        )
    )