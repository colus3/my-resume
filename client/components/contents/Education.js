/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { PageHeader } from 'react-bootstrap';
import { DateFormat, DateTime } from 'dateutils';
import _ from 'underscore';

import Content from './AbstractContent';

class Education extends Content {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    if ( _.isEmpty(this.state.content.data) ) {
      return (<div></div>);
    }
    
    const educations = this.state.content.data.map( (education, i) => {
      const startDate = DateFormat.format(DateTime.fromDateObject(new Date(education.startDate)), 'Y-m');
      const endDate = DateFormat.format(DateTime.fromDateObject(new Date(education.endDate)), 'Y-m');
      return `* ${startDate} ~ ${endDate} ${education.title}\n`;
    }).join(' ');
    
    return (
      <div>
        <PageHeader>{this.state.content.name}</PageHeader>
        <ReactMarkdown source={educations} />
      </div>
    );
  }
}

export default Education;