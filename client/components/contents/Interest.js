/**
 * Created by Colus on 2016. 8. 22..
 */
import React from 'react';
import { PageHeader } from 'react-bootstrap';

const propTypes = {
  datas: React.PropTypes.array
};

class Interest extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      interest: this.props.datas
    };
  }
  
  render() {
    const style = { 'display': 'inline-block', 'marginRight': '5px' };
    const color = ['success', 'info', 'warning', 'danger', 'primary'];
    
    const interests = this.state.interest.map( (interest, i) => {
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
        <PageHeader>INTEREST</PageHeader>
        <h3>{interests}</h3>
      </div>
    );
  }
}

Interest.propTypes = propTypes;

export default Interest;