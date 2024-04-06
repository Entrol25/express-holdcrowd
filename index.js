// https://www.youtube.com/watch?v=tKM44vPHU0U
// npm start
// npm run dev
// /?num=123&str=qwerty
// https://www.npmjs.com/package/mexc-api 
// https://www.youtube.com/watch?v=9EtkpCzqZu0&t=95s
// https://www.youtube.com/watch?v=kaLZgD-Ctss&list=PLD-piGJ3Dtl3qZFKzosT47lCCMEcqMK_L
// https://getbootstrap.com/docs/5.3/getting-started/download/
// https://www.youtube.com/watch?v=XoWvQkJWdb8
// https://ejs.co/

// install-nodejs-ubuntu
// https://computingforgeeks.com/how-to-install-nodejs-on-ubuntu-debian-linux-mint/

// npm i pm2

// import colors from 'colors'
import express from "express"
import path from 'path'
import { Spot, Contract } from 'mexc-api'
import { XpxMosaicProperties } from 'tsjs-xpx-chain-sdk'
//import { MyFunc } from "./functions/test.js"

const __dirname = path.resolve()

const PORT = 5000

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))

app.use(express.json())// app.post ------------------

//-app.get('/', (req, res) => {
// console.log(req.query)
// console.log(req.query.num)
// res.status(200).json('Сервер работает!')
// res.send('<h1>Hello Express!</h1>')// https://www.youtube.com/watch?v=9EtkpCzqZu0
// res.status(200).json(req.query)
// res.json(req.query)
// res.status(200).json({ pay: "Yes", wallet: "23nlsdfhwebkitURLafln" })
//----------------------------------------------------------------------
//-  res.send(MyFunc())
//-})
//---------------------------------------------------
// app.post('/', (req, res) => {
//   console.log(req.body)
//   res.status(200).json('Сервер работает!')
// })
//--------------------------------------------------

app.use(express.static(path.resolve(__dirname, 'ejs')))
// api *****************************************************************
const spot = new Spot({
  // apiKey: process.env.API_KEY,
  // apiSecret: process.env.SECRET_KEY
});
let apiJson = 'apiJson'
let apiText = "apiText"
let second = 1000 * 10
let count = 0
loop()// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
async function loop() {// https://www.youtube.com/watch?v=3xaN1tDdkF4&t=1018s
  while (true) {
    await waitForMe(second)
    count++
    if (count >= 5) count = 0
    //------------------------------------------
    // let apiJson = await spot.serverTime();
    // console.log(colors.bgBlue.white(apiJson))
    // apiText = JSON.stringify(apiJson)
    // console.log(colors.bgYellow.black(apiText))
    //------------------------------------------
    apiJson = await spot.ticker({
      symbol: 'XPX_USDT'
    })
    // console.log(colors.bgBlue.white(apiJson))
    apiText = JSON.stringify(apiJson)
    // console.log(colors.bgYellow.black(apiText))
    // console.log(count)
  }
}
function waitForMe(ms) {
  return new Promise(resolve => {
    setTimeout(() => { resolve('') }, ms)
  })
}
app.get('/api', (req, res) => {
  // res.send(apiText)
  res.status(200).json(apiJson)
})
//********************************************************************** 
app.get('/download/apk', (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'soft', 'download.html'))
  res.download(path.resolve(__dirname, 'soft', 'apk.html'))
})
// .ejs ------------------------------------------------------------
app.get('/', (req, res) => {
  res.render('index', { title: 'Home', content: '1', active: 'home' })
})
app.get('/game', (req, res) => {
  res.render('game', { title: 'Game', content: '2', active: 'game' })
})
app.get('/about', (req, res) => {
  res.render('about', { title: 'About', content: '3', active: 'about' })
})
app.get('/mexc', (req, res) => {
  // ?num=123&str=qwerty
  res.render('mexc', { title: 'Mexc', content: '4', active: 'mexc' })
})
//-----------------------------------------------------------------------
app.listen(PORT, () => {
  console.log(` ***** Server started on PORT = ${PORT} ***** `)
})

