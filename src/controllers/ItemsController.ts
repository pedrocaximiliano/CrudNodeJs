
import {Request , Response} from 'express';
import Knex from '../database/connection';

class ItemsController {

    async index(request: Request, response: Response) {
        const categories = await Knex('categories').select('*');
     
        const serializedCategories = categories.map(category => {
           return {
              id: category.id,
              code:category.code,
              description: category.description,
           };
        });
        return response.json(serializedCategories);
     }
}

export default ItemsController;

