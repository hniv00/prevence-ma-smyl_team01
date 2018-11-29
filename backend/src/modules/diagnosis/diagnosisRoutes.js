import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
    newDiagController,
    deleteDiagController,
} from './diagnosisController';

const router = expressAsyncAwait(Router());
router.post('/newdiag/', newDiagController);
router.post('/deletediag/:id', deleteDiagController);

export default router;
