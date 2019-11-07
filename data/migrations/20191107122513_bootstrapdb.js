
exports.up = function(knex) {
  return knex.schema.createTable('species', tbl => {
      tbl.increments(); // the type of the Primary Key is integer without negative values, also called unsigned

      table.string('name', 255).notNullable();
  })
  .createTable('animals', tbl => {
      tbl.increments();

      tbl.string('name', 255).notNullable();

      //define our Foreign Key
      tbl.integer('species_id')
      .unsigned()
      .references('id')
      .inTable('species')
      .onDelete('RESTRICT') // about deleting the record from the primary key table. Could be 'RESTRICT', 'NO ACTION', 'SET NULL'
      .onUpdate('CASCADE') // about changing the value of the primary key

      // we have bears and a few animals that are bears.
  }).createTable('zoos', tbl => {
      tbl.increments();

      tbl.string('name', 255).notNullable();
      tbl.string('address', 255)
  })
  .createTable('animal_zoos', tbl => {
      tbl.increments();
      tbl.integer('zoo_id')
      .unsigned()
      .references('id')
      .inTable('zoos')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
      tbl.integer('animal_id')
      .unsigned()
      .references('id')
      .inTable('animals')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')

      tbl.string('from', 255).notNullable();
      tbl.string('to', 255)
  })
};

exports.down = function(knex) {
  
};
