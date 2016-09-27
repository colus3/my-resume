/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { PageHeader } from 'react-bootstrap';
import _ from 'underscore';

import Content from './AbstractContent';

class Profile extends Content {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    if ( _.isEmpty(this.state.content.data) || _.isEmpty(this.state.content.data[0].aboutMe) ) {
      return (<div></div>);
    }
  
    // const aboutMe = this.state.content.data[0].aboutMe.replace(/\n/g,'<br />');
    return (
      <div>
        <PageHeader>{this.state.content.name}</PageHeader>
        <ReactMarkdown source={this.state.content.data[0].aboutMe}/>
        {/*<h5><div dangerouslySetInnerHTML={{__html: aboutMe}} /></h5>*/}
      </div>
    );
  }
}

export default Profile;