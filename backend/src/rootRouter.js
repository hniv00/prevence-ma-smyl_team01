import { Router } from 'express';

import diagnosisRoutes from './modules/diagnosis/diagnosisRoutes';
import examRoutes from './modules/examination/examRoutes';

const router = Router();

router.use('/api/diagnosis', diagnosisRoutes);
router.use('/api/examination', examRoutes);

export default router;
