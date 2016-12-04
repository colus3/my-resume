/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { PageHeader } from 'react-bootstrap';
import { DateFormat, DateTime, DateLocale } from 'dateutils';
import _ from 'underscore';

const Education = (props) => {

  if ( _.isEmpty(props.data.contents) ) {
    return (<div></div>);
  }

  const educations = props.data.contents.map( education => {
    const startDate = DateFormat.format(DateTime.fromDateObject(new Date(education.start_date)), 'Y-m', DateLocale.EN);
    const endDate = DateFormat.format(DateTime.fromDateObject(new Date(education.end_date)), 'Y-m', DateLocale.EN);
    return `* ${startDate} ~ ${endDate} ${education.title}\n`;
  }).join(' ');

  return (
    <div>
      <PageHeader>{props.data.display_name}</PageHeader>
      <ReactMarkdown source={educations} />
    </div>
  );
};

Education.propTypes = { data: React.PropTypes.object };
Education.defaultProps = { data: { display_name: '', type: '', contents: [] } };

export default Education;