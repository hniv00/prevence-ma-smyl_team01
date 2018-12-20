import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
    indicationController,
    newIndicationController,
    deleteIndicationController,
    updateIndicationController,
} from './indicationController';

const router = expressAsyncAwait(Router());
router.get('/list/', indicationController);
router.post('/new/', newIndicationController);
router.post('/delete/:id', deleteIndicationController);
router.post('/update/:id', updateIndicationController);

export default router;
