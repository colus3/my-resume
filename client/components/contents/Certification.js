/**
 * Created by colus on 2016. 10. 1..
 */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { PageHeader } from 'react-bootstrap';
import { DateFormat, DateTime, DateLocale } from 'dateutils';
import _ from 'underscore';

const Certification = (props) => {

  if ( _.isEmpty(props.data.contents) ) {
    return (<div></div>);
  }

  const certifications = props.data.contents.map( certification => {
    const startDate = DateFormat.format(DateTime.fromDateObject(new Date(certification.start_date)), 'Y-m', DateLocale.EN);
    return `* ${startDate} ${certification.title}\n`;
  }).join(' ');

  return (
      <div>
        <PageHeader>{props.data.display_name}</PageHeader>
        <ReactMarkdown source={certifications} />
      </div>
  );
};

Certification.propTypes = { data: React.PropTypes.object };
Certification.defaultProps = { data: { display_name: '', type: '', contents: [] } };

export default Certification;