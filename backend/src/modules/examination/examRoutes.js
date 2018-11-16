import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  examController,
  examBasicController,
  examAdvancedController,
} from './examController';

const router = expressAsyncAwait(Router());
router.get('/', examController);
router.get('/:gender/:age/', examBasicController);
router.post('/advanced/:gender/:age/', examAdvancedController);

export default router;
