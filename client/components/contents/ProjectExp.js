/**
 * Created by Colus on 2016. 8. 21..
 */
import React from 'react';
import { PageHeader } from 'react-bootstrap';
import _ from 'underscore';

import { TimeLine2 } from 'components';
import { TimeLineData } from 'domains';

const ProjectExperience = (props) => {

  if ( _.isEmpty(props.data.contents) ) {
    return (<div></div>);
  }

  let datas = props.data.contents.map((project, i) => {
    return new TimeLineData(
      i,
      new Date(project.start_date),
      new Date(project.end_date),
      project.title,
      `role : ${project.contents}`,
      project.label ? new Object(project.label).toString().split(',') : []
    );
  });

  return (
    <div>
      <PageHeader>{props.data.display_name}</PageHeader>
      <TimeLine2 datas={datas} useYearLabel/>
    </div>
  );
};

ProjectExperience.propTypes = { data: React.PropTypes.object };
ProjectExperience.defaultProps = { data: { display_name: '', type: '', contents: [] } };

export default ProjectExperience;