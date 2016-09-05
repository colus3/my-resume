/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';
import { DateFormat, DateTime } from 'dateutils';

const propTypes = {
  education: React.PropTypes.object
};

class Education extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      education: this.props.education
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

const mapStateToProps = (state) => {
  return {
    education: state.contents.education
  };
};

export default connect(mapStateToProps)(Education);