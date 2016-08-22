/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import TimeLine from '../common/timeline';
import Company from '../../models/company';
import TimeLineData from '../../models/timelineData';

export default class WorkExperience extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.companys = [
      new Company('1', 'WideTNS', '2008.09', '2013.01', 'C/C++, Java를 이용한 서버 프로세스 개발'),
      new Company('2', 'Freelancer', '2013.02', '2013.11', 'C, Java, Python, SNMP를 이용한 서버 프로세스 개발'),
      new Company('3', 'CodeBean', '2013.12', '2016.07', 'Java, Spring을 이용한 웹 및 API 서버 개발')
    ];
  }
  
  static propTypes() {
    return {
      'className': React.PropTypes.string
    };
  }
  
  render() {
  
    let datas = this.companys.map((company, i) => {
      return new TimeLineData( i, `${company.startDate}~${company.endDate} ${company.companyName}`, company.business, [] );
    });
    
    return (
      <div>
        <h1 className={this.props.className}>WORK EXPERIENCE</h1>
        <TimeLine datas={datas}/>
      </div>
    );
  }
}