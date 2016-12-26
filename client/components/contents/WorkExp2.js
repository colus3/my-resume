/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { PageHeader } from 'react-bootstrap';
import _ from 'underscore';
import { DateTime, DateFormat, DateLocale } from 'dateutils';

const WorkExperience = (props) => {

  if ( _.isEmpty(props.data.contents) ) {
    return (<div></div>);
  }

  let works = props.data.contents.map( (work, i) => {
    let date =
    `(${DateFormat.format(DateTime.fromDateObject(new Date(work.start_date)), 'Y-m', DateLocale.EN)} \
    ~ ${DateFormat.format(DateTime.fromDateObject(new Date(work.end_date)), 'Y-m', DateLocale.EN)})`;
    return (
      <div key={i}>
        <h3>{work.title} {date}</h3>
        <ReactMarkdown source={work.desc}/>
      </div>
    );
  });

  return (
    <div>
      <PageHeader>{props.data.display_name}</PageHeader>
      {works}
    </div>
  );
};

WorkExperience.propTypes = { data: React.PropTypes.object };
WorkExperience.defaultProps = { data: { display_name: '', type: '', contents: [] } };

export default WorkExperience;