exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe', function(table) {
    table.increments();
    table.string('recipe_name').notNullable();
    table
      .integer('dish_id')
      .unsigned()
      .references('id')
      .inTable('dishes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe');
};
