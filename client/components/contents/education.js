/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';

export default class Education extends React.Component {
  
  constructor() {
    super();
    
    this.educations = [
      { 'startDate': '2000.03', 'endDate': '2008.02', 'content': '서경대학교 컴퓨터과학과' },
      { 'startDate': '2007.11', 'endDate': '2008.02', 'content': 'C++ 윈도우 마스터(정부 지원 비트교육센터)' },
    ];
  }
  
  static propTypes() {
    return {
      'className': React.PropTypes.string
    };
  }
  
  render() {
    return (
      <div>
        <h1 className={this.props.className}>EDUCATION</h1>
        <ul>
          <li>
            2000.03 ~ 2008.02 서경대학교 컴퓨터과학과
          </li>
          <li>
            2007.11 ~ 2008.02 C++ 윈도우 마스터(정부 지원 비트교육센터)
          </li>
        </ul>
      </div>
    );
  }
}