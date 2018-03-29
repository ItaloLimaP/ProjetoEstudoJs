const knex = require("../db").knex
const router = require("express").Router()

router.get("/list", (req,res) => 
  knex("pessoa_evento").select().then(ret => res.send(ret)))

  exports.router = router