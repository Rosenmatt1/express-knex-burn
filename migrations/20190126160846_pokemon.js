exports.up = function (knex, Promise) {
  return knex.schema.createTable('pokemon', table => {
    table.increments('id').notNullable().defaultsTo('')
    table.string('name').notNullable().defaultsTo('')
    table.string('ability').notNullable().defaultsTo('')
    // table.integer('power level').notNullable().defaultsTo(0)
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('pokemon')
};