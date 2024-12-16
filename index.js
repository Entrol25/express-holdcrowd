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

import express from "express"
import path from 'path'

const __dirname = path.resolve()

const PORT = 5000

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))

app.use(express.json())// app.post ------------------

app.use(express.static(path.resolve(__dirname, 'ejs')))

//-----------------------------------------------------------------------
app.get('/', (req, res) => {
  res.render('index', { title: 'Home', content: 'Home', active: 'home' })
})
app.get('/game', (req, res) => {
  res.render('game', { title: 'Game', content: 'Game', active: 'game' })
})
//
app.get('/game/spacerelaxation', (req, res) => {
  res.render('game/spacerelaxation', { title: 'Space Relaxation', content: 'Space Relaxation', active: 'game' })
})
//-----------------------------------------------------------------------
app.listen(PORT, () => {
  console.log(` ***** Server started on PORT = ${PORT} ***** `)
})

