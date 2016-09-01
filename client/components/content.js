/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import Profile from './contents/profile';
import WorkExp from './contents/workExp';
import ProjectExp from './contents/projectExp';
import Education from './contents/education';
import Skill from './contents/skill';
import Interest from './contents/interest';

export default class Content extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Profile/>
              <WorkExp/>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Education/>
              <Skill/>
              <Interest/>
            </div>
          </div>
        </div>
        <div className="page-break"></div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <ProjectExp/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}