const knex = require("./db").knex
const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const app = express()

app.use(morgan("dev"))
app.use(bodyParser.json())

// liberando qualquer origem, uns verbos e alguns headers extras
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS")
  res.header("Access-Control-Allow-Headers", "X-Filename, Content-Type")
  next()
})

app.use("/festa", require("./features/festa").router)

app.get("/online", (req, res) => res.send("ONLINE"))

exports.start = porta => 
  knex.migrate.latest().then( _ => app.listen(porta))