/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { PageHeader } from 'react-bootstrap';
import _ from 'underscore';

const Skill = (props) => {

  if ( _.isEmpty(props.data.content) ) {
    return (<div></div>);
  }

  const color = ['success', 'info', 'warning', 'danger', 'primary'];

  const skills = props.data.content.map((skill, i) => {

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


  const skillsPrint = props.data.content.map((skill, i) => {

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
      <PageHeader>{props.data.name}</PageHeader>
      {skills}
      {skillsPrint}
    </div>
  );
};

Skill.propTypes = { data: React.PropTypes.object };
Skill.defaultProps = { data: { name: '', type: '', content: [] } };

export default Skill;