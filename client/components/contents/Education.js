/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { PageHeader } from 'react-bootstrap';
import { DateFormat, DateTime, DateLocale } from 'dateutils';
import _ from 'underscore';

const Education = (props) => {

  if ( _.isEmpty(props.data.content) ) {
    return (<div></div>);
  }

  const educations = props.data.content.map( (education, i) => {
    const startDate = DateFormat.format(DateTime.fromDateObject(new Date(education.startDate)), 'Y-m', DateLocale.EN);
    const endDate = DateFormat.format(DateTime.fromDateObject(new Date(education.endDate)), 'Y-m', DateLocale.EN);
    return `* ${startDate} ~ ${endDate} ${education.title}\n`;
  }).join(' ');

  return (
    <div>
      <PageHeader>{props.data.name}</PageHeader>
      <ReactMarkdown source={educations} />
    </div>
  );
};

Education.propTypes = { data: React.PropTypes.object };
Education.defaultProps = { data: { name: '', type: '', content: [] } };

export default Education;