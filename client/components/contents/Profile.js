/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { PageHeader } from 'react-bootstrap';

const propTypes = {
  datas: React.PropTypes.array
};

class Profile extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      aboutMe: this.props.datas[0].aboutMe
    };
  }
  
  render() {
    const aboutMe = this.state.aboutMe.replace(/\n/g,'<br />');
    return (
      <div>
        <PageHeader>PROFILE</PageHeader>
        <h5><div dangerouslySetInnerHTML={{__html: aboutMe}} /></h5>
      </div>
    );
  }
}

Profile.propTypes = propTypes;

export default Profile;