/**
 * Created by colus on 2016. 9. 23..
 */
import express from 'express';
import path from 'path';

import { handleRender } from '../../public/js/server';
import api from './apis';

const router = express.Router();

router.use(express.static(path.join(__dirname, '../../public'))); // Static Resource
router.use('/api', api); // Server API
router.get('/default', handleRender);
router.get('/id/:id*?', handleRender); // React Server Side Rendering

export default router;