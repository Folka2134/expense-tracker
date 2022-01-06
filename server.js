const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')

const connectDB = require('./config/db')
const transactions = require('./routes/transactions')

dotenv.config({ path: './config/config.env' })
const PORT = process.env.PORT || 5000

const app = express()
connectDB()

app.use(express.json())
app.use('/api/v1/transactions', transactions)
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on PORT:${PORT}`.yellow.bold));