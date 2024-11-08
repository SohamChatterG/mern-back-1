const express = require("express");
const app = express()
const cors = require('cors')
const mainRouter = require('./routes/index')

app.use(cors({
    origin: 'https://mern-front-1-5x8f.onrender.com'
}))
app.use(express.json())

app.use('/api/v1',mainRouter)

app.listen(3000,function(err){
    if(err) console.log('error while listening',err)
    console.log('listening on PORT 3000')
})


