import { Router } from 'express';

import authRoutes from './modules/authentication/authRoutes'
import examRoutes from './modules/examination/examRoutes';
import diagnosisRoutes from './modules/diagnosis/diagnosisRoutes';

const router = Router();

router.use('/api/auth', authRoutes);
router.use('/api/examination', examRoutes);
router.use('/api/diagnosis', diagnosisRoutes);

export default router;
