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
router.post('/newstory/', newStoryController);
router.post('/deletestory/:id', deleteStoryController);
router.post('/updatestory/:id', updateStoryController);

export default router;
