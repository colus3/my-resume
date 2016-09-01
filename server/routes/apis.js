/**
 * Created by Colus on 2016. 8. 22..
 */
import express from 'express';
import phantom from 'phantom';

// import db from '../db/orientdb';
import { getInitialData } from '../db/orientdb';

const router = express.Router();

router.get('/me', function(req, res) {
  
  // let object = new Object();
  // // db.traverse().from('MY_RESUME').all()
  // db.select('name as resumeName, user.name as name, user.phone as phone, user.email as email, user.birthDate as birthDate')
  //   .from('myResume').one()
  //   .then(result => {
  //     object = result;
  //     return db.select('Expand(contents)').from('myResume').all();
  //   })
  //   .then(result => {
  //
  //     object.contents = new Object();
  //
  //     Promise.all(result.map(resumeContent => {
  //       if ( object.contents[resumeContent.type] ) {
  //         object.contents[resumeContent.type] = new Array();
  //       }
  //       return db.select('Expand(content)').from(resumeContent['@rid']).all()
  //         .then(content => {
  //           object.contents[resumeContent.type] = content;
  //           return content;
  //         });
  //     }))
  //       .then(() => res.json(object));
  //   });
  
  getInitialData().then( (object) => res.json(object) );
});

router.get('/profile', function(req, res) {
  res.json({
    test: 'profile'
  });
});

router.get('/workExps', function(req, res) {
  res.json({
    test: 'workExps'
  });
});

router.get('/projectExps', function(req, res) {
  res.json({
    test: 'projectExps'
  });
});

router.get('/skills', function(req, res) {
  res.json({
    test: 'skills'
  });
});


router.get('/interests', function(req, res) {
  res.json({
    test: 'interests'
  });
});

router.get('/download', function(req, res) {
  
  const id = req.query.id;
  let filename = './tmp/resume.pdf';
  let _ph, _page;
  
  phantom.create().then(instance => {
    _ph = instance;
    console.log('Create page for PDF');
    return instance.createPage();
    
  }).then(page => {
    _page = page;
    return page.open(`${req.protocol}://${req.get('host')}/${id ? id : ''}`);
    
  }).then(status => {
    console.log('status : ' + status);
    _page.property('viewportSize', {width: 1024, height: 768});
    _page.property('paperSize', {
      format: 'A2',
      orientation: 'portrait',
      margin: {left: '1cm', right: '1cm', top: '2cm', bottom: '1cm'}
    });

    return _page.render(filename);
    
  }).then(() => {
    res.download(filename); // 파일 다운로드
    _page.close();
    _ph.exit();
    
  }).catch(error => {
    console.log(error);
    _ph.exit();
  });
  
});

export default router;