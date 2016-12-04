/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { PageHeader } from 'react-bootstrap';
import _ from 'underscore';

const Profile = (props) => {

  if ( _.isEmpty(props.data.contents) || _.isEmpty(props.data.contents[0].contents) ) {
    return (<div></div>);
  }

  return (
    <div>
      <PageHeader>{props.data.display_name}</PageHeader>
      <ReactMarkdown source={props.data.contents[0].contents}/>
    </div>
  );
};

Profile.propTypes = { data: React.PropTypes.object };
Profile.defaultProps = { data: { display_name: '', type: '', contents: [] } };

export default Profile;