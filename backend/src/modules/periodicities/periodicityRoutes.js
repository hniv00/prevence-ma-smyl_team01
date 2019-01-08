import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import { periodicityController } from './periodicityController';

const router = expressAsyncAwait(Router());
router.get('/list/', periodicityController);

export default router;
