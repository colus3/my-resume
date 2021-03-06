/**
 * Created by colus on 2016. 10. 1..
 */
import React from 'react';
import ReactMarkdown from 'react-markdown';

import { DateFormat, DateTime, DateLocale } from 'dateutils';
import _ from 'lodash';

import { ContentItem } from '../../components';

const Certification = (props) => {

  if ( _.isEmpty(props.data.contents) ) {
    return (<ContentItem />);
  }

  const certifications = props.data.contents.map( certification => {
    const startDate = DateFormat.format(DateTime.fromDateObject(new Date(certification.start_date)), 'Y-m', DateLocale.EN);
    return `* ${startDate} ${certification.title}\n`;
  }).join(' ');

  const contentItems = [];
  contentItems.push(<ReactMarkdown source={certifications} />);
  return (<ContentItem resumeUIType={props.resumeUIType} title={props.data.display_name} contentItems={contentItems}/>);
};

Certification.propTypes = { resumeUIType: React.PropTypes.string, data: React.PropTypes.object };
Certification.defaultProps = { resumeUIType: '', data: { display_name: '', type: '', contents: [] } };

export default Certification;