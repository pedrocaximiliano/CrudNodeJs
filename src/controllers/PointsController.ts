import knex from '../database/connection';
import express from 'express';

class PointsControllers {
    async index(req: express.Request, res: express.Response) {
        const { category } = req.query;

        const parsedItens = String(category)
            .split(',')
            .map(item => Number(item.trim()));

        const courses = await knex('courses')
            .join('course_categories', 'courses.id', '=', 'course_categories.courses_id')
            .whereIn('course_categories.categories_id', parsedItens)
            .distinct()
            .select('courses.*');

        return res.json( courses);
    };

    async update(req: express.Request, res: express.Response) {
        const { id } = req.params;
        const { name, startDate, endDate } = req.body;
        const parsedItens = String(startDate);
        const trx = await knex.transaction();
        const course = {
            name:
            startDate,
            endDate,
        };
        
        await trx('courses').update({name, startDate, endDate})
        .where('id', id);
        await trx.commit();

        return res.json({message: id, ...course});
    };

    async create(req: express.Request, res: express.Response) {
        const {
            name,
            startDate,
            endDate,
            category,
        } = req.body;
        const course = {
            name,
            startDate,
            endDate,
        };
        const courses = await knex('courses')
        .join('course_categories', 'courses.id', '=', 'course_categories.courses_id')
        .select('courses.*', 'course_categories.*').where({
            startDate,
            categories_id: category
        })
        if (courses.length > 0) {
            return res.json({
                status: 400,
                message: 'já existe curso para essa data'
             });
        } else {
        const trx = await knex.transaction();
        const insertedIds = await trx('courses').insert(course);
        const courses_id = insertedIds[0];
        const courseCategories = [{ categories_id: category, courses_id }];

        await trx('course_categories').insert( courseCategories );
        await trx.commit();

        return res.json({
            id: courses_id,
            category,
           ... course
         });
        } 

    };
    async show(req: express.Request, res: express.Response) {
        const { id } = req.params;
        const course = await knex('courses').where('id', id).first();
        if (!course) {
            return res.status(400).json({ error: 'curso não encontrado' })
        }
        
        const categories = await knex('categories')
            .join('course_categories', 'categories.id', '=', 'course_categories.categories_id')
            .where('course_categories.courses_id', id)
            .select('categories.description');
        return res.json({ course, categories });
    };

    async delete(req: express.Request, res: express.Response) {
        const { id } = req.query;

        const parsedItens = String(id);

        if (id != null) {
            const point = await knex('courses').where('id', parsedItens).delete();
            const categories = await knex('course_categories').where('id', parsedItens).delete();
            return res.json({message: "curso deletado " });
        } else {
            const point = await knex('courses').delete();
            const categories = await knex('course_categories').delete();
            return res.json({message: "curso deletado tudo deletado" });
        }

    };
}

export default PointsControllers;
