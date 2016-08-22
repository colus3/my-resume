/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import Profile from './contents/profile';
import WorkExp from './contents/workExp';
import ProjectExp from './contents/projectExp';

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
        <WorkExp className="page-header"/>
        <ProjectExp className="page-header"/>
      </div>
    );
  }
}