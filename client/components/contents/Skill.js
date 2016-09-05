/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';

const propTypes = {
  skills: React.PropTypes.array
};

class Skill extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      skills: this.props.skills
    };
  }
  
  render() {
    const color = ['success', 'info', 'warning', 'danger', 'primary'];
    
    const skills = this.state.skills.map((skill, i) => {
      
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
  
  
    const skillsPrint = this.state.skills.map((skill, i) => {
      
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

const mapStateToProps = (state) => {
  return {
    skills: state.contents.skill
  };
};

export default connect(mapStateToProps)(Skill);