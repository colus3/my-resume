/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';

import _ from 'lodash';

import { ContentItem } from '../../components';

const Skill = (props) => {

  if ( _.isEmpty(props.data.contents) ) {
    return (<ContentItem />);
  }

  const color = ['success', 'info', 'warning', 'danger', 'primary'];

  const skills = props.data.contents.slice(0, 10).map((skill, i) => {

    const level = { width: `${skill.label}%` };
    return (
      <div className="progress hidden-print" key={i}>
        <div className={`progress-bar progress-bar-${color[i % 5]}`}
             role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
             style={level}>
        </div>
        <span className="progress-type">{skill.title}</span>
        <span className="progress-completed">{skill.label} %</span>
      </div>
    );
  });

  const skillsPrint = props.data.contents.slice(0, 10).map((skill, i) => {

    const level = { width: `${skill.label}%` };
    return (
      <div className="progress visible-print" key={i}>
        <div className="progress-bar progress-bar-gray"
             role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
             style={level}>
        </div>
        <span className="progress-type">{skill.title}</span>
        <span className="progress-completed">{skill.label} %</span>
      </div>
    );
  });

  const contentItems = [];
  contentItems.push(skills);
  contentItems.push(skillsPrint);
  return (<ContentItem resumeUIType={props.resumeUIType} title={props.data.display_name} contentItems={contentItems}/>);
};

Skill.propTypes = { resumeUIType: React.PropTypes.string, data: React.PropTypes.object };
Skill.defaultProps = { resumeUIType: '', data: { display_name: '', type: '', contents: [] } };

export default Skill;