// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const http = require('http')
const hostname = "127.0.0.1"
const port = 3000
const express = require('express')
const app = express()
const sqlite = require('sqlite3').verbose()

const db = new sqlite3.Database('../../../server/database.db')

db.connect((err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Connected to database')
  }
})

app.use(express.json())

// Crear y pedir el challenge
function between(min, max) {
  return Math.floor(
     Math.random() * (max - min) + min
   )
 }
app.get('/challenge', (req, res) => {
  console.log('Nuevo challenge')
  var stmt = db.prepare("INSERT INTO challenge VALUES (?,?)");
  for (var i = 0; i < 10; i++) {
  var j = between(1,24)
  while (numeros1.includes(j)) {
  j = between(1,24)
}
  numeros1.push(j)
  var k = between(1,24)
  while (numeros2.includes(k)) {
  k = between(1,24)
}
  numeros2.push(k)

  stmt.run(numeros1[i], numeros2[i]);
 }
  stmt.finalize();
  db.all('SELECT * FROM challenges', (err, rows) => {
    if (err) {
      console.log(err)
    } else {
      res.json(rows)
    }
  })
})



app.listen(port, () => {
  console.log(`Server running at ${port}/`)
})
