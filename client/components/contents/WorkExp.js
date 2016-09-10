/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { PageHeader } from 'react-bootstrap';
import _ from 'underscore';

import Content from './AbstractContent';

import TimeLine from '../common/Timeline';
import TimeLineData from '../../domains/timelineData';

class WorkExperience extends Content {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    if ( _.isEmpty(this.state.content.data) ) {
      return (<div></div>);
    }
    
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