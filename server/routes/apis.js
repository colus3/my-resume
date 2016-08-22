/**
 * Created by Colus on 2016. 8. 22..
 */
import express from 'express';

const router = express.Router();

router.get('/me', function(req, res) {
  res.json({
    test: 'me'
  });
});

router.get('/users/:user/profile', function(req, res) {
  res.json({
    test: 'profile'
  });
});

router.get('/users/:user/workExps', function(req, res) {
  res.json({
    test: 'workExps'
  });
});

router.get('/users/:user/projectExps', function(req, res) {
  res.json({
    test: 'projectExps'
  });
});

router.get('/users/:user/skills', function(req, res) {
  res.json({
    test: 'skills'
  });
});


router.get('/users/:user/interests', function(req, res) {
  res.json({
    test: 'interests'
  });
});

export default router;