import express  from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

//index: listar varios, show:listar unico, create:criação, update: alteracao e atualizacao, delete

const routes = express.Router();

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/categories', itemsController.index );

routes.post('/courses', pointsController.create );

routes.put('/courses/:id?', pointsController.update );

routes.get('/courses/:id', pointsController.show ); 

routes.delete('/courses', pointsController.delete );

routes.get('/courses', pointsController.index );

export default routes
