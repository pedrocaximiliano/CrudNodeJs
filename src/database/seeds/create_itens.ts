import Knex from 'knex'

// adiconar categorias
export async function seed(Knex: Knex) {
   await Knex('categories').insert([
        {code: '1', description: 'Comportamental'},
        {code: '2', description: 'Programação'},
        {code: '3', description: 'Qualidade'},
        {code: '4', description: 'Processos'},
    ])
}
