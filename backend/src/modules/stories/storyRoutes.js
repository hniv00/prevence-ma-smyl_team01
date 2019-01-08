import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  storyController,
  newStoryController,
  deleteStoryController,
  updateStoryController,
} from './storyController';

const router = expressAsyncAwait(Router());
router.get('/list/', storyController);
router.post('/new/', newStoryController);
router.post('/delete/:id', deleteStoryController);
router.post('/update/:id', updateStoryController);

export default router;
