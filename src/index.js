import express from 'express'
const app = express();
import mongoose from 'mongoose'

const { SERV_PORT, DB_url } = process.env
import "dotenv/config"
import volleyball from 'volleyball'
import { truckRouter } from '../routes/trucks'
// import path from 'path'

mongoose.connect(DB_url)
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`[MongoDB] connected`);
});


app.use(express.json())
app.use(volleyball)
app.use(express.urlencoded({extended:false}))

app.use('/trucks', truckRouter)


app.use('/', (req, res) => {
  res.send('Just forgot and work !');
})

app.use('/', (req, res) => {
  res.send("j'ai faim sa mère")
})


app.listen(SERV_PORT, () => {
  console.log(`[APP working on port : ${SERV_PORT}]`)
})
