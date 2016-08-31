/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { connect } from 'react-redux';

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
      className: React.PropTypes.string,
      experience: React.PropTypes.object
    };
  }
  
  render() {
  
    const datas = this.state.experience.map((work, i) => {
      return new TimeLineData(
        i,
        `${new Date(work.startDate).toISOString().slice(0,7)} ~ ${new Date(work.endDate).toISOString().slice(0,7)} ${work.title}`,
        `${work.content}`,
        work.labels ? new Object(work.labels).toString().split(',') : []
      );
    });
    
    return (
      <div>
        <h1 className={this.props.className}>WORK EXPERIENCE</h1>
        <TimeLine datas={datas}/>
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