import express from 'express';
const router = express.Router();
import { create } from '../controller/product.controller.js';

// router.get('/',fetch);
router.post('/', create);
// router.put('/',update);
// router.delete('/',remove);

export default router;