/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';

class Profile extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      aboutMe: this.props.aboutMe
    };
  }
  
  static propTypes() {
    return {
      aboutMe: React.PropTypes.string
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


const mapStateToProps = (state) => {
  return {
    aboutMe: state.contents.profile[0].aboutMe
    
  };
};

export default connect(mapStateToProps)(Profile);