import express from 'express';
import * as itemController from '../controllers/itemController.js';

const router = express.Router();

router.route('/items').post(itemController.create).get(itemController.read);

router // se pueden poner todas en 1 sin tener que repetir codigo
  .route('/items/:id')
  .get(itemController.readById)
  .put(itemController.update);

export default router;