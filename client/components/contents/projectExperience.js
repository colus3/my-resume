/**
 * Created by Colus on 2016. 8. 21..
 */
import React from 'react';
import TimeLine from '../common/timeline';
import Project from '../../models/project';
import TimeLineData from '../../models/timelineData';

export default class ProjectExperience extends React.Component {
  
  constructor() {
    super();
    
    this.projects = [
      new Project('1', '온라인 과금 게이트웨이(OCG) 구축','WideTNS', '2008.09', '2009.05', ['C++', 'Java', 'Unix/Linux'], 'Linux에서 동작하는 C++, Java 프로세스 개발'),
      new Project('2', 'SKT 키즈 플랫폼 구축', 'WideTNS', '2009.05', '2010.08', ['Java', 'Unix/Linux'], 'Unix/Linux에서 동작하는 Java 프로세스 개발')
    ];
  }
  
  static propTypes() {
    return {
      'className': React.PropTypes.string
    };
  }
  
  render() {
  
    let datas = this.projects.map((project, i) => {
      return new TimeLineData(
        i,
        `${project.startDate}~${project.endDate} ${project.projectName}`,
        project.description,
        project.skills
      );
    });
  
  
    return (
      <div>
        <h1 className={this.props.className}>PROJECT EXPERIENCE</h1>
        <TimeLine datas={datas}/>
      </div>
    );
  }
}