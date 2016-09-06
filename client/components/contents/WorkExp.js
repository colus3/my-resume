/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { PageHeader } from 'react-bootstrap';

import TimeLine from '../common/Timeline';
import TimeLineData from '../../models/timelineData';

const propTypes = {
  datas: React.PropTypes.array
};

class WorkExperience extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      experience: this.props.datas
    };
  }
  
  render() {
    
    const datas = this.state.experience.map((work, i) => {
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
        <PageHeader>WORK EXPERIENCE</PageHeader>
        <TimeLine datas={datas} usePeriod />
      </div>
    );
  }
}

WorkExperience.propTypes = propTypes;

export default WorkExperience;