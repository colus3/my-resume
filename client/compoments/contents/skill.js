/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';

export default class Skill extends React.Component {
  
  static propTypes() {
    return {
      className: React.PropTypes.string
    };
  }
  
  render() {
    var twenty = { width: '20%' };
    var forty = { width: '40%' };
    var sixty = { width: '60%' };
    var eighty = { width: '80%' };
    return (
      <div>
        <h1 className={this.props.className}>SKILL</h1>
        <div className="progress">
          <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={forty}>
            Java
          </div>
        </div>
        <div className="progress">
          <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={twenty}>
            C/C++
          </div>
        </div>
        <div className="progress">
          <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={sixty}>
            Spring
          </div>
        </div>
        <div className="progress">
          <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={eighty}>
            Node.js
          </div>
        </div>
      </div>
    );
  }
}