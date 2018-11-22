import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
    diagController,
} from './diagnosisController';

const router = expressAsyncAwait(Router());
router.post('/newdiag/', diagController);

export default router;
