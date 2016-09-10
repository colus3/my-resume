/**
 * Created by Colus on 2016. 8. 21..
 */
import React from 'react';
import { PageHeader } from 'react-bootstrap';

import Content from './Content';

import TimeLine2 from '../common/Timeline2';
import TimeLineData from '../../domains/timelineData';

class ProjectExperience extends Content {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    
    let datas = this.state.content.data.map((project, i) => {
      return new TimeLineData(
        i,
        new Date(project.startDate),
        new Date(project.endDate),
        project.title,
        project.content,
        project.labels ? new Object(project.labels).toString().split(',') : []
      );
    });
    
    
    return (
      <div>
        <PageHeader>{this.state.content.name}</PageHeader>
        <TimeLine2 datas={datas} useYearLabel/>
      </div>
    );
  }
}

export default ProjectExperience;