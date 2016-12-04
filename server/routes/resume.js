/**
 * Created by colus on 2016. 9. 23..
 */
import express from 'express';
import path from 'path';

import { handleRender } from '../../public/js/server';

const router = express.Router();

router.use(express.static(path.join(__dirname, '../../public'))); // Static Resource
router.get('/default', handleRender);
router.get('/id/:id*?', handleRender); // React Server Side Rendering
router.get('/:id*?', handleRender); // React Server Side Rendering

export default router;