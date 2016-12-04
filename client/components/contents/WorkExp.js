/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { PageHeader } from 'react-bootstrap';
import _ from 'underscore';

import { TimeLine } from 'components';
import { TimeLineData } from 'domains';

const WorkExperience = (props) => {

  if ( _.isEmpty(props.data.contents) ) {
    return (<div></div>);
  }

  const datas = props.data.contents.map((work, i) => {
    return new TimeLineData(
      i,
      new Date(work.start_date),
      new Date(work.end_date),
      work.title,
      work.contents,
      work.label ? new Object(work.label).toString().split(',') : []
    );
  });

  return (
    <div>
      <PageHeader>{props.data.display_name}</PageHeader>
      <TimeLine datas={datas} usePeriod />
    </div>
  );
};

WorkExperience.propTypes = { data: React.PropTypes.object };
WorkExperience.defaultProps = { data: { display_name: '', type: '', contents: [] } };

export default WorkExperience;