import Knex from 'knex';

export async function up(knex: Knex) {
    // criar a tabela
    return knex.schema.createTable('courses', table => {
        table.increments('id').primary(); 
        table.string('name').notNullable();
        table.dateTime('startDate').notNullable();
        table.dateTime('endDate').notNullable();
    });
}

export async function down(knex: Knex) {
   return knex.schema.dropTable('points');
}