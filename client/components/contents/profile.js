/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { connect } from 'react-redux';

export default class Profile extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      aboutMe: this.props.aboutMe
    };
  }
  
  static propTypes() {
    return {
      className: React.PropTypes.string,
      aboutMe: React.PropTypes.string
    };
  }
  
  render() {
    return (
      <div>
        <h1 className={this.props.className}>PROFILE</h1>
        <p>
          {this.state.aboutMe}
        </p>
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