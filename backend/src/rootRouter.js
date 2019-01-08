import { Router } from 'express';

import authRoutes from './modules/authentication/authRoutes';
import examRoutes from './modules/examination/examRoutes';
import diagnosisRoutes from './modules/diagnosis/diagnosisRoutes';
import partnerRoutes from './modules/partners/partnerRoutes';
import storyRoutes from './modules/stories/storyRoutes';
import indicationRoutes from './modules/indications/indicationRoutes';
import articleRoutes from './modules/articles/articleRoutes';
import eventRoutes from './modules/events/eventRoutes';
import questionRoutes from './modules/questions/questionRoutes';
import twitterFeedRoutes from './modules/twitterFeed/twitterFeedRoutes';
import diagIndicRoutes from './modules/diagIndics/diagIndicRoutes';
import diagPartnerRoutes from './modules/diagPartners/diagPartnerRoutes';
import examDiagRoutes from './modules/examDiags/examDiagRoutes';
import examIndicRoutes from './modules/examIndics/examIndicRoutes';
import periodicityRoutes from './modules/periodicities/periodicityRoutes';
import emailRoutes from './modules/email/emailRoutes';

const router = Router();

router.use('/api/auth', authRoutes);
router.use('/api/examination', examRoutes);
router.use('/api/diagnosis', diagnosisRoutes);
router.use('/api/partners', partnerRoutes);
router.use('/api/story', storyRoutes);
router.use('/api/indication', indicationRoutes);
router.use('/api/article', articleRoutes);
router.use('/api/event', eventRoutes);
router.use('/api/question', questionRoutes);
router.use('/api/twitterfeed', twitterFeedRoutes);
router.use('/api/diagindic', diagIndicRoutes);
router.use('/api/diagpartner', diagPartnerRoutes);
router.use('/api/examdiag', examDiagRoutes);
router.use('/api/examindic', examIndicRoutes);
router.use('/api/periodicity', periodicityRoutes);
router.use('/api/email', emailRoutes);

export default router;
