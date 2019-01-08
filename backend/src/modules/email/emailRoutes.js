import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';
import { emailController } from './emailController';

const router = expressAsyncAwait(Router());
router.post('/send/', emailController);

export default router;
