/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
// import { PageHeader } from 'react-bootstrap';
import { Header, Divider } from 'semantic-ui-react';
import _ from 'lodash';

import { ContentItem, TimeLine } from 'components';
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

  const contentItems = [];
  contentItems.push(<TimeLine datas={datas} usePeriod />);
  return (<ContentItem resumeUIType={props.resumeUIType} title={props.data.display_name} contentItems={contentItems}/>);
};

WorkExperience.propTypes = { resumeUIType: React.PropTypes.string, data: React.PropTypes.object };
WorkExperience.defaultProps = { resumeUIType: '', data: { display_name: '', type: '', contents: [] } };

export default WorkExperience;