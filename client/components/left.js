/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import Profile from './contents/profile';
import WorkExperience from './contents/workExperience';
import ProjectExperience from './contents/projectExperience';

export default class LeftContent extends React.Component {
  
  static propTypes() {
    return {
      className: React.PropTypes.string
    };
  }
  
  render() {
    return (
      <div className={this.props.className}>
        <Profile className="page-header"/>
        <WorkExperience className="page-header"/>
        <ProjectExperience className="page-header"/>
      </div>
    );
  }
}