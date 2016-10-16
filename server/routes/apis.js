/**
 * Created by Colus on 2016. 8. 22..
 */
import express from 'express';
import phantom from 'phantom';
import { DateTime, DateFormat } from 'dateutils';

import { getInitialData } from '../db/orientdb';

const router = express.Router();

router.get('/me', function(req, res) {
  
  getInitialData().then( (object) => res.json(object) );
});

router.get('/download/:id', function(req, res) {
  
  const id = req.params.id;
  const suffix = DateFormat.format(DateTime.now(), 'YmdHis');
  const filename = `./tmp/resume_${suffix}.pdf`;
  let _ph, _page;
  
  phantom.create(['--ignore-ssl-errors=yes']).then(instance => {
    _ph = instance;
    console.log('Create page for PDF');
    return instance.createPage();
    
  }).then(page => {
    _page = page;
    let url = `${req.protocol}://${req.get('host')}/my-resume/id/${id ? id : ''}`;
    return page.open(url);
    
  }).then(status => {
    console.log('status : ' + status);
    
    if ( status !== 'success' ) {
      return Error(status);
    }
    _page.property('viewportSize', {width: 1300, height: 768});
    _page.property('paperSize', {
      format: 'A2',
      orientation: 'portrait',
      margin: {left: '0.5cm', right: '0.5cm', top: '2cm', bottom: '1cm'}
    });

    return _page.render(filename);
    
  }).then(() => {
    res.download(filename); // 파일 다운로드
    _page.close();
    _ph.exit();
    
  }).catch(error => {
    res.end();
    console.log(error);
    _ph.exit();
  });
  
});

export default router;