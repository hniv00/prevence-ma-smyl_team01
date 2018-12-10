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
router.get('/', examController);
router.get('/:gender/:age/', examBasicController);
router.post('/advanced/:gender/:age/', examAdvancedController);
router.post('/newexam/', examNewController);
router.post('/deleteexam/:id', examDeleteController);
router.post('/updateexam/:id', examUpdateController);

export default router;
