/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';

export default class Skill extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.skillDatas = [
      {
        'skillName': 'Java',
        'level': { 'width': '80%' }
      },
      {
        'skillName': 'C/C++',
        'level': { 'width': '80%' }
      },
      {
        'skillName': 'Java 8',
        'level': { 'width': '50%' }
      },
      {
        'skillName': 'Spring',
        'level': { 'width': '60%' }
      },
      {
        'skillName': 'Swift',
        'level': { 'width': '30%' }
      },
      {
        'skillName': 'Node.js',
        'level': { 'width': '20%' }
      },
      {
        'skillName': 'React',
        'level': { 'width': '20%' }
      },
      {
        'skillName': 'Oracle',
        'level': { 'width': '70%' }
      },
      {
        'skillName': 'MySQL',
        'level': { 'width': '70%' }
      }
    ];
  }
  
  static propTypes() {
    return {
      'className': React.PropTypes.string
    };
  }
  
  render() {
    const color = ['success', 'info', 'warning', 'danger', 'primary'];
    
    const skills = this.skillDatas.map( (skill, i) => {
      
      return (
        <div className="progress" key={i}>
          <div className={`progress-bar progress-bar-${color[i % 5]}`} role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={skill.level}>
            {skill.skillName}
          </div>
        </div>
      );
    });
    
    return (
      <div>
        <h1 className={this.props.className}>SKILL</h1>
        {skills}
      </div>
    );
  }
}