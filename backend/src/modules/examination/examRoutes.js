import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  examController,
  examDetailController,
  examGenderController,
  examAgeController,
  examBasicController,
} from './examController';

const router = expressAsyncAwait(Router());
router.get('/', examController);
router.get('/:id', examDetailController);
router.get('/g/:gender', examGenderController);
router.get('/a/:age', examAgeController);
router.get('/:gender/:age/', examBasicController);
/*router.get('/:::', examController.search);*/

export default router;
