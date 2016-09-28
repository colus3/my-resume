/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { PageHeader } from 'react-bootstrap';
import _ from 'underscore';

import Content from './AbstractContent';

class Skill extends Content {
  
  constructor(props) {
    super(props);
  }

  render() {
    if ( _.isEmpty(this.state.content.data) ) {
      return (<div></div>);
    }
    
    const color = ['success', 'info', 'warning', 'danger', 'primary'];
    
    const skills = this.state.content.data.map((skill, i) => {
      
      const level = { width: `${skill.expertiseRating}%` };
      return (
        <div className="progress hidden-print" key={i}>
          <div className={`progress-bar progress-bar-${color[i % 5]}`}
               role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
               style={level}>
          </div>
          <span className="progress-type">{skill.skillName}</span>
          <span className="progress-completed">{skill.expertiseRating} %</span>
        </div>
      );
    });
  
  
    const skillsPrint = this.state.content.data.map((skill, i) => {
      
      const level = { width: `${skill.expertiseRating}%` };
      return (
        <div className="progress visible-print" key={i}>
          <div className="progress-bar progress-bar-gray"
               role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
               style={level}>
          </div>
          <span className="progress-type">{skill.skillName}</span>
          <span className="progress-completed">{skill.expertiseRating} %</span>
        </div>
      );
    });
    
    return (
      <div>
        <PageHeader>{this.state.content.name}</PageHeader>
        {skills}
        {skillsPrint}
      </div>
    );
  }
}

export default Skill;