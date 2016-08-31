/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { connect } from 'react-redux';

class Skill extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      skills: this.props.skills
    };
  }
  
  static propTypes() {
    return {
      className: React.PropTypes.string,
      skills: React.PropTypes.object
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
        <h1 className={this.props.className}>SKILL</h1>
        {skills}
        {skillsPrint}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    skills: state.contents.skill
  };
};

export default connect(mapStateToProps)(Skill);