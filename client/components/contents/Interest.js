/**
 * Created by Colus on 2016. 8. 22..
 */
import React from 'react';
import { PageHeader } from 'react-bootstrap';
import _ from 'underscore';

const Interest = (props) => {

  if ( _.isEmpty(props.data.contents) ) {
    return (<div></div>);
  }

  const style = { 'display': 'inline-block', 'marginRight': '5px' };
  const color = ['success', 'info', 'warning', 'danger', 'primary'];

  const interests = props.data.contents.map( (interest, i) => {
    return (
      <span
        key={i}
        className={`label label-${color[parseInt(i / 5) > 4 ? 4 : parseInt(i / 5)]}`}
        style={style}>
        {interest.title}
      </span>
    );
  });

  return (
    <div>
      <PageHeader>{props.data.display_name}</PageHeader>
      <h3>{interests}</h3>
    </div>
  );
};

Interest.propTypes = { data: React.PropTypes.object };
Interest.defaultProps = { data: { display_name: '', type: '', contents: [] } };

export default Interest;