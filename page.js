var page = require('webpage').create();


page.viewportSize = { width: 1024, height: 768 };
page.paperSize = {
  format: 'A2',
  orientation: 'portrait',
  margin: {
    left: '1cm',
    right: '1cm'
  },
  footer: {
    height: '1cm',
    contents: phantom.callback(function (pageNum, numPages) {
      return '<div>' + pageNum + '/' + numPages + '</div>';
    })
  }
};
// page.zoomFactor = 0.25;

page.onLoadFinished = function(status) {
  page.render('screenshot1.pdf');
  phantom.exit();
};

page.open('http://localhost:3000', function(status) {
  
  if ( status !== 'success' ) {
    console.log('Cannot open webpage');
    phantom.exit();
  }
});