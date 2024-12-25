import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductBId,
} from '../controllers/productController.js';

router.route('/').get(getProducts);
router.route('/:id').get(getProductBId);

export default router;
