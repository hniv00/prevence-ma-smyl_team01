import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
    newPartnerController,
    partnerDiagController,
} from './partnerController';

const router = expressAsyncAwait(Router());
router.post('/newpartner/', newPartnerController);
router.get('/list/', partnerDiagController);

export default router;
