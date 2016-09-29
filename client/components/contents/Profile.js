/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { PageHeader } from 'react-bootstrap';
import _ from 'underscore';

const Profile = (props) => {

  if ( _.isEmpty(props.data.content) || _.isEmpty(props.data.content[0].aboutMe) ) {
    return (<div></div>);
  }

  // const aboutMe = this.state.content.data[0].aboutMe.replace(/\n/g,'<br />');
  return (
    <div>
      <PageHeader>{props.data.name}</PageHeader>
      <ReactMarkdown source={props.data.content[0].aboutMe}/>
      {/*<h5><div dangerouslySetInnerHTML={{__html: aboutMe}} /></h5>*/}
    </div>
  );
};

Profile.propTypes = { data: React.PropTypes.object };
Profile.defaultProps = { data: { name: '', type: '', content: [] } };

export default Profile;