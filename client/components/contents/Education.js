/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { DateFormat, DateTime } from 'dateutils';

const propTypes = {
  datas: React.PropTypes.array
};

class Education extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      education: this.props.datas
    };
  }
  
  render() {
    const educations = this.state.education.map( (education, i) => {
      const startDate = DateFormat.format(DateTime.fromDateObject(new Date(education.startDate)), 'Y-m');
      const endDate = DateFormat.format(DateTime.fromDateObject(new Date(education.endDate)), 'Y-m');
      return (
        <li key={i}>{`${startDate} ~ ${endDate} ${education.title}`}</li>
      );
    });
    
    return (
      <div>
        <PageHeader>EDUCATION</PageHeader>
        <ul>
          <h5>{educations}</h5>
        </ul>
      </div>
    );
  }
}

Education.propTypes = propTypes;

export default Education;