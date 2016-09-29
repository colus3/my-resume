/**
 * Created by Colus on 2016. 8. 21..
 */
import React from 'react';
import { PageHeader } from 'react-bootstrap';
import _ from 'underscore';

import TimeLine2 from '../common/Timeline2';
import TimeLineData from '../../domains/timelineData';

const ProjectExperience = (props) => {

  if ( _.isEmpty(props.data.content) ) {
    return (<div></div>);
  }

  let datas = props.data.content.map((project, i) => {
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
      <PageHeader>{props.data.name}</PageHeader>
      <TimeLine2 datas={datas} useYearLabel/>
    </div>
  );
};

ProjectExperience.propTypes = { data: React.PropTypes.object };
ProjectExperience.defaultProps = { data: { name: '', type: '', content: [] } };

export default ProjectExperience;