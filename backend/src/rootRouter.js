import { Router } from 'express';

import authRoutes from './modules/authentication/authRoutes'
import examRoutes from './modules/examination/examRoutes';

const router = Router();

router.use('/api/auth', authRoutes);
router.use('/api/examination', examRoutes);

export default router;
