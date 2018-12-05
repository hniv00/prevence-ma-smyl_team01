import { Router } from 'express';

import authRoutes from './modules/authentication/authRoutes'
import examRoutes from './modules/examination/examRoutes';
import diagnosisRoutes from './modules/diagnosis/diagnosisRoutes';
import partnerRoutes from './modules/partners/partnerRouter';
import storyRoutes from './modules/stories/storyRouter';

const router = Router();

router.use('/api/auth', authRoutes);
router.use('/api/examination', examRoutes);
router.use('/api/diagnosis', diagnosisRoutes);
router.use('/api/partners', partnerRoutes);
router.use('/api/story', storyRoutes);

export default router;
