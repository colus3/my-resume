/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';

import TimeLine from '../common/timeline';
import TimeLineData from '../../models/timelineData';

class WorkExperience extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      experience: this.props.experience
    };
  }
  
  static propTypes() {
    return {
      experience: React.PropTypes.object
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

const mapStateToProps = (state) => {
  return {
    experience: state.contents.workExperience
  };
};

export default connect(mapStateToProps)(WorkExperience);