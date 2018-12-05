import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
    storyController,
    newStoryController,
    deleteStoryController,
} from './storyController';

const router = expressAsyncAwait(Router());
router.get('/list/', storyController);
router.post('/newstory/', newStoryController);
router.post('/deletestory/:id', deleteStoryController);

export default router;
