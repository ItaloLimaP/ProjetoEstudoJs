exports.up = knex => knex.schema.createTable("pessoa", tb => {
    tb.increments("idpessoa")
    tb.string("nomepessoa")
  }).createTable("evento", tb => {
    tb.increments("idevento")
    tb.string("tituloevento")
    tb.timestamp("dataevento").notNullable().defaultTo(knex.fn.now())
  }).createTable("pessoa_evento", tb => {
    tb.integer("idpessoa").notNullable().references("pessoa.idpessoa")
    tb.integer("idevento").notNullable().references("evento.idevento")
    tb.primary(["idpessoa", "idevento"])
  })
  
  exports.down = knex => knex.schema
    .dropTable("pessoa_evento")
    .dropTable("evento")
    .dropTable("pessoa")
