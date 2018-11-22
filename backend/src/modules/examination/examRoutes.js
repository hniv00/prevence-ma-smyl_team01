import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
    examController,
    examBasicController,
    examAdvancedController,
    examAMController,
} from './examController';

const router = expressAsyncAwait(Router());
router.get('/', examController);
router.get('/:gender/:age/', examBasicController);
router.post('/advanced/:gender/:age/', examAdvancedController);
router.post('/newexam/', examAMController);

export default router;
