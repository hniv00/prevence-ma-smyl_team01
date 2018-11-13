import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  examController,
  examDetailController,
  examGenderController,
  examAgeController,
  examBasicController,
  examAdvancedController,
} from './examController';

const router = expressAsyncAwait(Router());
router.get('/', examController);
router.get('/:gender/:age/', examBasicController);
router.get('/advanced/:gender/:age/', examAdvancedController);
//router.get('/:id', examDetailController);
/*router.get('/:::', examController.search);*/

export default router;
