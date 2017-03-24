/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import ReactMarkdown from 'react-markdown';

import _ from 'lodash';
import { DateTime, DateFormat, DateLocale } from 'dateutils';

import { ContentItem } from '../../components';

const WorkExperience = (props) => {

  if ( _.isEmpty(props.data.contents) ) {
    return (<div></div>);
  }
  const style={ display: 'inline-block', marginRight: '5px', color: '#fff' };

  let works = props.data.contents.map( (work, i) => {
    let date =
    `(${DateFormat.format(DateTime.fromDateObject(new Date(work.start_date)), 'Y-m', DateLocale.EN)} \
    ~ ${DateFormat.format(DateTime.fromDateObject(new Date(work.end_date)), 'Y-m', DateLocale.EN)})`;
    let labels = work.label.split(',').map(label => (<span className='label label-default' style={style}>{label}</span>));
    return (
      <div key={i}>
        <h3>{work.title} {date}</h3>
        <ReactMarkdown source={work.desc}/>
        {labels}
      </div>
    );
  });

  const contentItems = [];
  contentItems.push(works);
  return (<ContentItem resumeUIType={props.resumeUIType} title={props.data.display_name} contentItems={contentItems}/>);
};

WorkExperience.propTypes = { resumeUIType: React.PropTypes.string, data: React.PropTypes.object };
WorkExperience.defaultProps = { resumeUIType: '', data: { display_name: '', type: '', contents: [] } };

export default WorkExperience;