/**
 * Created by Colus on 2016. 8. 22..
 */
import express from 'express';
import phantom from 'phantom';

const router = express.Router();

router.get('/me', function(req, res) {
  res.json({
    test: 'me'
  });
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
  
  let filename = 'resume.pdf';
  let _ph, _page;
  
  phantom.create().then(instance => {
    _ph = instance;
    console.log('createPage');
    return instance.createPage();
    
  }).then(page => {
    _page = page;
    console.log('page open');
    return page.open('http://localhost:3000');
    
  }).then(status => {
    console.log('status : ' + status);
    _page.property('viewportSize', {width: 1024, height: 768});
    _page.property('paperSize', {
      format: 'A2',
      orientation: 'portrait',
      margin: {left: '1cm', right: '1cm', top: '1cm', bottom: '1cm'}
    });
  
    _page.invokeMethod('evaluate', () => {
      return Array.prototype.forEach.call(
        document.getElementsByClassName('page-hidden'), (page_hidden, index) => page_hidden.style.display = 'none' );
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