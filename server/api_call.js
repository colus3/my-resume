/**
 * Created by colus on 2016. 12. 4..
 */
import rp from 'request-promise';
import _ from 'underscore';

let host = 'localhost:4000';
let options = {
  uri: `http://${host}/api/my-resume/default`,
  json: true,
};

function getInitialData(id) {

  if ( ! _.isEmpty(id) ) {
    options.uri = `http://${host}/api/my-resume/` + id;
  }

  return rp(options);
}

export { getInitialData }