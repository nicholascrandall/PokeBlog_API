require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

//mongoose
mongoose.connect(process.env.MONGODBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})

const db = mongoose.connection;
db.once('open', ()=> console.log('DB connected...'));
db.on('error', (error)=> console.log(error.message));
db.on('disconnected', ()=> console.log('Mongoose disconnected...'));

//controllers
app.use('/blog', require('./controllers/blogController'))

app.listen(PORT, () => {
    console.log('server is listening')
})