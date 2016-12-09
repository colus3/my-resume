/**
 * Created by colus on 2016. 12. 4..
 */
import rp from 'request-promise';
import _ from 'underscore';

function getInitialData(id) {

  const host = process.env.API_IP + ":" + process.env.API_PORT;
  let options = {
    uri: `http://${host}/api/my-resume/default`,
    json: true,
  };

  if ( ! _.isEmpty(id) ) {
    options.uri = `http://${host}/api/my-resume/` + id;
  }

  return rp(options);
}

export { getInitialData }