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
        'level': { 'width': '80%' },
        'color': 'progress-bar progress-bar-success'
      },
      {
        'skillName': 'C/C++',
        'level': { 'width': '80%' },
        'color': 'progress-bar progress-bar-info'
      },
      {
        'skillName': 'Java 8',
        'level': { 'width': '50%' },
        'color': 'progress-bar progress-bar-success'
      },
      {
        'skillName': 'Spring',
        'level': { 'width': '60%' },
        'color': 'progress-bar progress-bar-warning'
      },
      {
        'skillName': 'Swift',
        'level': { 'width': '30%' },
        'color': 'progress-bar progress-bar-danger'
      },
      {
        'skillName': 'Node.js',
        'level': { 'width': '20%' },
        'color': 'progress-bar progress-bar-success'
      },
      {
        'skillName': 'React',
        'level': { 'width': '20%' },
        'color': 'progress-bar progress-bar-info'
      },
      {
        'skillName': 'Oracle',
        'level': { 'width': '70%' },
        'color': 'progress-bar progress-bar-warning'
      },
      {
        'skillName': 'MySQL',
        'level': { 'width': '70%' },
        'color': 'progress-bar progress-bar-danger'
      }
    ];
  }
  
  static propTypes() {
    return {
      'className': React.PropTypes.string
    };
  }
  
  render() {
    var twenty = { width: '20%' };
    var forty = { width: '40%' };
    var sixty = { width: '60%' };
    var eighty = { width: '80%' };
    
    const skills = this.skillDatas.map( (skill, i) => {
      return (
        <div className="progress">
          <div className={skill.color} role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={skill.level}>
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