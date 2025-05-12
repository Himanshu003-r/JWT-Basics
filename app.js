require('dotenv').config()
const express = require('express')
const app = express()

const mainRouter = require('./Routes/main')
const notFoundMiddleware = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/errorHandler')

// middleware
app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1', mainRouter)
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3500
const start = async () => {
    try {
        app.listen(port, console.log(`Server running on ${port}`))
    } catch (error) {
        console.log(error);  
    }
}

start()