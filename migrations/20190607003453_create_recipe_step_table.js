exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_steps', function(table) {
    table.increments('step_id');
    table.float('quantity').notNullable();
    table.string('instructions').notNullable();
    table
      .integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipe')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    table
      .integer('ingredient_id')
      .unsigned()
      .references('id')
      .inTable('ingredients')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe_steps');
};
