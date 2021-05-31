const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv/config')
const app = express()
const PORT = process.env.PORT || 5500

const userRoutes = require('./routes/users.routes')
const { verifyIsAuth } = require('./middlewares/auth.middlewares')

mongoose.connect(process.env.URL_DB_MONGO, 
    {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log('Datatbase Connected')
)

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cookieParser())
const corsOptions = {
    origin: 'http://localhost:3000', 
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))


app.use('/api', userRoutes)
app.use('*',verifyIsAuth, (req, res, next) => {
    next()
})

app.listen(PORT, (err) => {
    if(err){
        return console.log(err)
    }
    return console.log(`Your app listen in port ${PORT}`)
})

