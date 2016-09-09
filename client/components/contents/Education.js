/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { DateFormat, DateTime } from 'dateutils';

import Content from './Content';

class Education extends Content {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    const educations = this.state.content.data.map( (education, i) => {
      const startDate = DateFormat.format(DateTime.fromDateObject(new Date(education.startDate)), 'Y-m');
      const endDate = DateFormat.format(DateTime.fromDateObject(new Date(education.endDate)), 'Y-m');
      return (
        <li key={i}>{`${startDate} ~ ${endDate} ${education.title}`}</li>
      );
    });
    
    return (
      <div>
        <PageHeader>{this.state.content.name}</PageHeader>
        <ul>
          <h5>{educations}</h5>
        </ul>
      </div>
    );
  }
}

export default Education;