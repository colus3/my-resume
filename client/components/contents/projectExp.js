/**
 * Created by Colus on 2016. 8. 21..
 */
import React from 'react';
import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';

import TimeLine2 from '../common/timeline2';
import TimeLineData from '../../models/timelineData';

class ProjectExperience extends React.Component {
  
  constructor(props) {
    super(props);
    
    // this.projects = [
    //   new Project('1', 'SKT 키즈 플랫폼 구축', 'CODEbean', '2016.02', '2016.07', ['Java', 'Spring', 'MySQL'], 'SKT 키즈플랫폼 개발'),
    //   new Project('2', '코드빈 IoT ', 'CODEbean', '2015.11', '2016.01', ['Java', 'Spring', 'Python', 'Swift', 'RespberryPi', 'MySQL'], '라즈베리파이를 이용한 기기 연동'),
    //   new Project('3', 'LG Smart World Website 개선', 'CODEbean', '2015.07', '2015.11', ['Java', 'Spring', 'MySQL'], 'Web Portal 기능 개선'),
    //   new Project('4', '윤선생영어3~6세서비스 구축', 'CODEbean', '2015.01', '2015.06', ['Java', 'Spring', 'MySQL'], 'API 서버와 Admin 기능 개발'),
    //   new Project('5', 'Celcom M2M Platform 구축', 'CODEbean', '2014.03', '2014.12', ['Java', 'Spring', 'Oracle'], 'Web Admin 개발'),
    //   new Project('6', 'nTels WoT Portal 구축', 'CODEbean', '2013.12', '2014.02', ['Java', 'Spring', 'MySQL'], '연동 Portal 개발'),
    //   new Project('7', 'LG U+ IPNMS 4.0', 'Freelancer', '2013.06', '2013.11', ['Java', 'SNMP'], 'IPNMS 프로세스 기능 개선'),
    //   new Project('8', 'LG U+ APTNMS IPv6 적용', 'Freelancer', '2013.02', '2013.05', ['C', 'Java', 'SNMP'], 'APTNMS 포르세스 기능 개선'),
    //   new Project('9', 'SKT UAPS CPIN 연동 시스템 구축', 'WideTNS', '2013.01', '2013.01', ['Java', 'Socket'], 'Java Socket API 개발'),
    //   new Project('10', 'SKT UAPS C API 구조 개선', 'WideTNS', '2012.10', '2012.12', ['C', 'Socket'], 'CP와 C Daemon과 연동되는 API 구조 개선'),
    //   new Project('11', 'SKT UAPS CDS 연동 프로세스 성능 개선', 'WideTNS', '2012.03', '2012.06', ['C', 'nginx', 'Oracle', 'LDAP'], 'nginx LDAP 전송 모듈 개발'),
    //   new Project('12', 'SKT UAPS Traffic 통계 서버 개발', 'WideTNS', '2011.05', '2011.11', ['Java', 'Oracle'], '통계 데이터 수집 및 저장 기능 개발'),
    //   new Project('13', 'SKT UAPS CDS 재처리 프로세스 구조개선', 'WideTNS', '2011.03', '2011.05', ['Java', 'Unix/Linux'], 'CDS 재처리 프로세스 개발'),
    //   new Project('14', 'SKT UAPS CDS 시뮬레이터 개발', 'WideTNS', '2010.10', '2011.03', ['Java', 'Socket'], 'CDS 시스템 연동 시뮬레이터 개발'),
    //   new Project('15', 'SKT UAPS CDS 연동 프로세스 미들웨어 개선', 'WideTNS', '2010.04', '2010.10', ['C', 'Curl'], '미들웨어 변경으로 인한 연동 방식 수정'),
    //   new Project('16', 'SKT UAPS C API & Daemon 추가 연동 개발', 'WideTNS', '2010.01', '2012.02', ['C', 'C++', 'Socket'], '프로세스 버그 수정 및 추가 기능 개발'),
    //   new Project('17', 'SKT 정보료 과금 시스템 구조개선', 'WideTNS', '2009.01', '2009.12', ['C++', 'Altibase'], '프로세스 DB 변경 및 프로세스 변경 개발'),
    //   new Project('18', 'SKT Ting 한도 과금 게이트웨이(OCG) 개발', 'WideTNS', '2008.06', '2009.01', ['C', 'C++', 'Java', 'Socket'], 'C/C++/Java 연동 Socket API 개발'),
    //   new Project('19', 'SKT 정보료 과금 전송 방식 개선', 'WideTNS', '2008.02', '2008.06', ['Java'], '전송될 데이터를 수집하는 프로세스 개발'),
    // ];
    
    this.state = {
      experience: this.props.experience
    };
  }
  
  static propTypes() {
    return {
      experience: React.PropTypes.object
      
    };
  }
  
  render() {
    
    let datas = this.state.experience.map((project, i) => {
      return new TimeLineData(
        i,
        new Date(project.startDate),
        new Date(project.endDate),
        project.title,
        project.content,
        project.labels ? new Object(project.labels).toString().split(',') : []
      );
    });
    
    
    return (
      <div>
        <PageHeader>PROJECT EXPERIENCE</PageHeader>
        <TimeLine2 datas={datas}/>
      </div>
    );
  }
}
  
const mapStateToProps = (state) => {
  return {
    experience: state.contents.projectExperience
  };
};

export default connect(mapStateToProps)(ProjectExperience);