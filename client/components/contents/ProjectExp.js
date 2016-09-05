/**
 * Created by Colus on 2016. 8. 21..
 */
import React from 'react';
import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';

import TimeLine2 from '../common/Timeline2';
import TimeLineData from '../../models/timelineData';

const propTypes = {
  experience: React.PropTypes.array
};

class ProjectExperience extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      experience: this.props.experience
    };
  }
  
  render() {
    
    let datas = this.state.experience.map((project, i) => {
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
        <PageHeader>PROJECT EXPERIENCE</PageHeader>
        <TimeLine2 datas={datas} useYearLabel/>
      </div>
    );
  }
}

ProjectExperience.propTypes = propTypes;
  
const mapStateToProps = (state) => {
  return {
    experience: state.contents.projectExperience
  };
};

export default connect(mapStateToProps)(ProjectExperience);