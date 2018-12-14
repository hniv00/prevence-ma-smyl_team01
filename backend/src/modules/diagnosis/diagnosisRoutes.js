import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
    newDiagController,
    deleteDiagController,
    diagController,
    updateDiagController,
} from './diagnosisController';

const router = expressAsyncAwait(Router());
router.post('/newdiag/', newDiagController);
router.post('/deletediag/:id', deleteDiagController);
router.post('/updatediag/:id', updateDiagController);
router.get('/list/', diagController);

export default router;
