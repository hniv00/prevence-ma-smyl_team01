import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  examController,
  examBasicController,
  examAdvancedController,
  examNewController,
  examDeleteController,
  examUpdateController,
} from './examController';

const router = expressAsyncAwait(Router());
router.get('/list/', examController);
router.get('/:gender/:age/', examBasicController);
router.post('/advanced/:gender/:age/', examAdvancedController);
router.post('/new/', examNewController);
router.post('/delete/:id', examDeleteController);
router.post('/update/:id', examUpdateController);

export default router;
