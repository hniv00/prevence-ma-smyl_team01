import { Router } from 'express';
import diagnosisRoutes from './modules/diagnosis/diagnosisRoutes';

const router = Router();

router.use('/api/diagnosis', diagnosisRoutes);

export default router;