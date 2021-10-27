require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const mongoose = require('mongoose')
const cors = require('cors')

//middleware
app.use(express.json())

//cors
const whitelist = [process.env.DEV_URL,process.env.PROD_URL]
const corsOptions = {
	origin: (origin, callback) => {
		if (whitelist.indexOf(origin) !== -1 || !origin) {
			callback(null, true)
		} else {
			callback(new Error('Not allowed by CORS'))
		}
	},
    methods: "GET,PUT,PATCH,POST,DELETE",
    credentials : true
}

app.use(cors(corsOptions))

//mongoose
mongoose.connect(process.env.MONGODBURI)

const db = mongoose.connection;
db.once('open', ()=> console.log('DB connected...'));
db.on('error', (error)=> console.log(error.message));
db.on('disconnected', ()=> console.log('Mongoose disconnected...'));

//controllers

app.use('/blog', require('./controllers/blogController'))
app.use('/comment', require('./controllers/commentController'))

//home route
app.get('/', (req, res)=> {
    res.send('Welcome to pokeBlog_API')
})

app.listen(PORT, () => {
    console.log('server is listening')
})