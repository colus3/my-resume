/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { PageHeader } from 'react-bootstrap';

const propTypes = {
  datas: React.PropTypes.array
};

class Skill extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      skill: this.props.datas
    };
  }
  
  render() {
    const color = ['success', 'info', 'warning', 'danger', 'primary'];
    
    const skills = this.state.skill.map((skill, i) => {
      
      const level = { width: `${skill.expertiseRating}%` };
      return (
        <div className="progress hidden-print" key={i}>
          <div className={`progress-bar progress-bar-${color[i % 5]}`}
               role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"
               style={level}>
            {skill.skillName}
          </div>
        </div>
      );
    });
  
  
    const skillsPrint = this.state.skill.map((skill, i) => {
      
      const level = { width: `${skill.expertiseRating}%` };
      return (
        <div className="progress visible-print" key={i}>
          <div className="progress-bar progress-bar-gray"
               role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"
               style={level}>
            {skill.skillName}
          </div>
        </div>
      );
    });
    
    return (
      <div>
        <PageHeader>SKILL</PageHeader>
        {skills}
        {skillsPrint}
      </div>
    );
  }
}

Skill.propTypes = propTypes;

export default Skill;