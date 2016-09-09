/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { PageHeader } from 'react-bootstrap';

import Content from './Content';

class Profile extends Content {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    const aboutMe = this.state.content.data[0].aboutMe.replace(/\n/g,'<br />');
    return (
      <div>
        <PageHeader>{this.state.content.name}</PageHeader>
        <h5><div dangerouslySetInnerHTML={{__html: aboutMe}} /></h5>
      </div>
    );
  }
}

export default Profile;