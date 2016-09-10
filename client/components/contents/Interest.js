/**
 * Created by Colus on 2016. 8. 22..
 */
import React from 'react';
import { PageHeader } from 'react-bootstrap';
import _ from 'underscore';

import Content from './AbstractContent';

class Interest extends Content {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    if ( _.isEmpty(this.state.content.data) ) {
      return (<div></div>);
    }
    
    const style = { 'display': 'inline-block', 'marginRight': '5px' };
    const color = ['success', 'info', 'warning', 'danger', 'primary'];
    
    const interests = this.state.content.data.map( (interest, i) => {
      return (
        <span
          key={i}
          className={`label label-${color[parseInt(i / 5) > 4 ? 4 : parseInt(i / 5)]}`}
          style={style}>
          {interest.name}
        </span>
      );
    });
    
    return (
      <div>
        <PageHeader>{this.state.content.name}</PageHeader>
        <h3>{interests}</h3>
      </div>
    );
  }
}

export default Interest;