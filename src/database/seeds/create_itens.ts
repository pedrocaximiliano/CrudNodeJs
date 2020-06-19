import Knex from 'knex'

// adiconar categorias
export async function seed(Knex: Knex) {
   await Knex('categories').insert([
        {code: '1', title: 'Comportamental'},
        {code: '2', title: 'Programação'},
        {code: '3', title: 'Qualidade'},
        {code: '4', title: 'Processos'},
    ])
}
