const express = require('express')
const logger = require('morgan')
const swaggerUi = require('swagger-ui-express') // to bind swagger with express 
const swaggerJSDoc = require('swagger-jsdoc') // for API documentation
const swStats = require('swagger-stats');
const colors = require('colors')
const timeout = require('connect-timeout')

const options = {
    definition:{
        openapi: '3.0.0',
        info: {
            title : 'Manticore API',
            version : '1.0.0'
        }
    },
    // path to the API DOCS
    apis:['./src/routes/index.js']
}


const swaggerSpec = swaggerJSDoc(options)

let dotEnv = require('dotenv')

dotEnv.config({path: './config/config.env'})

const indexRouter = require('./src/routes/index.js')

const app = express()
app.use(timeout('6000s'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(logger('dev'))
app.use((req, res, next) => {
    res.set('Cache-Control', process.env.CACHE_TYPE)
    next()
})
app.get("/", (req,res) => {
    res.writeHead(200, { 'Content-Type':'text/html'});
	res.end(JSON.stringify({service: "MOLFAR-API-MANTI"}))
})
app.use(swStats.getMiddleware({swaggerSpec:swaggerSpec, uriPath:"/metrics", name:"@molfar/ms-registry"}))
app.use('/api', indexRouter)
app.use('/api-documentation', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

module.exports = app;    