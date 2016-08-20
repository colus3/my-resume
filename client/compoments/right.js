/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import Education from './contents/education';
import Skill from './contents/skill';

export default class RightContent extends React.Component {
  
  static propTypes() {
    return {
      className: React.PropTypes.string
    };
  }
  
  render() {
    return (
      <div className={this.props.className}>
        <Education className="page-header"/>
        <Skill className="page-header"/>
      </div>
    );
  }
}