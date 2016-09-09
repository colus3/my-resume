/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { PageHeader } from 'react-bootstrap';

import Content from './Content';

import TimeLine from '../common/Timeline';
import TimeLineData from '../../models/timelineData';

class WorkExperience extends Content {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    
    const datas = this.state.content.data.map((work, i) => {
      return new TimeLineData(
        i,
        new Date(work.startDate),
        new Date(work.endDate),
        work.title,
        work.content,
        work.labels ? new Object(work.labels).toString().split(',') : []
      );
    });
    
    return (
      <div>
        <PageHeader>{this.state.content.name}</PageHeader>
        <TimeLine datas={datas} usePeriod />
      </div>
    );
  }
}

export default WorkExperience;