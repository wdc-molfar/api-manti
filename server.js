const app = require('./app')

const PORT = process.env.PORT || 3443
    app.listen(
        PORT,
        console.log(
            `Server running in ${process.env.NODE_ENV} node on port ${PORT}`.yellow.bold
        )
    )
