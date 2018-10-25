import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  examController,
  examDetailController,
  examGenderController,
} from './examController';

const router = expressAsyncAwait(Router());
router.get('/', examController);
router.get('/:id', examDetailController);
router.get('/g/:gender', examGenderController);
/*router.get('/:age', examController.getByAge);
router.get('/:::', examController.search);*/

export default router;
