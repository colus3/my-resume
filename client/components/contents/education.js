/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { connect } from 'react-redux';
import { DateFormat, DateTime } from 'dateutils';

class Education extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      education: this.props.education
    };
  }
  
  static propTypes() {
    return {
      education: React.PropTypes.object
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
        <h1 className="page-header">EDUCATION</h1>
        <ul>
          <h4>{educations}</h4>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    education: state.contents.education
  };
};

export default connect(mapStateToProps)(Education);