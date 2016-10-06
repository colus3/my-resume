/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { PageHeader } from 'react-bootstrap';
import _ from 'underscore';

import { TimeLine } from 'components';
import { TimeLineData } from 'domains';

const WorkExperience = (props) => {

  if ( _.isEmpty(props.data.content) ) {
    return (<div></div>);
  }

  const datas = props.data.content.map((work, i) => {
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
      <PageHeader>{props.data.name}</PageHeader>
      <TimeLine datas={datas} usePeriod />
    </div>
  );
};

WorkExperience.propTypes = { data: React.PropTypes.object };
WorkExperience.defaultProps = { data: { name: '', type: '', content: [] } };

export default WorkExperience;