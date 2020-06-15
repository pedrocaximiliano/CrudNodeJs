import Knex from 'knex';

export async function up(knex: Knex) {
    
    return knex.schema.createTable('course_categories', table => {
        table.increments('id').primary();

        table.integer('courses_id')
            .notNullable()
            .references('id')
            .inTable('courses');

        table.integer('categories_id')
            .notNullable()
            .references('id')
            .inTable('categories');
    });
}

export async function down(knex: Knex) {
   return knex.schema.dropTable('course_category');
}
