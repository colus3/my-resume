/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { connect } from 'react-redux';

class Education extends React.Component {
  
  constructor(props) {
    super(props);
    
    // this.educationDatas = [
    //   { 'startDate': '2000.03', 'endDate': '2008.02', 'content': '서경대학교 컴퓨터과학과' },
    //   { 'startDate': '2007.11', 'endDate': '2008.02', 'content': 'C++ 윈도우 마스터(정부 지원 비트교육센터)' },
    // ];
    
    this.state = {
      education: this.props.education
    };
  }
  
  static propTypes() {
    return {
      className: React.PropTypes.string,
      education: React.PropTypes.object
    };
  }
  
  render() {
    const educations = this.state.education.map( (education, i) => {
      return (
        <li key={i}>{`${new Date(education.startDate).toISOString().slice(0,7)} ~ ${new Date(education.startDate).toISOString().slice(0,7)} ${education.title}`}</li>
      );
    });
    
    return (
      <div>
        <h1 className={this.props.className}>EDUCATION</h1>
        <ul>
          {educations}
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