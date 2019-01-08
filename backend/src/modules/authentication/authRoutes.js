import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import { authController } from './authController';

const router = expressAsyncAwait(Router());
router.get('/:user.:secret', authController);

export default router;
