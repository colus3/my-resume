/**
 * Created by Colus on 2016. 8. 22..
 */
import React from 'react';

export default class Interest extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.interestDatas = [
      'Scala', 'Javascript', 'React', 'Functional Programming', 'iOS', 'Swift', 'Docker', 'Java 8', 'Modern C++', 'AKKA', 'Node.js', 'Apache Spark', 'NoSQL', 'IoT'
    ];
  }
  
  static propTypes() {
    return {
      'className': React.PropTypes.string
    };
  }
  
  render() {
    const style = { 'display': 'inline-block', 'marginRight': '5px' };
    const color = ['success', 'info', 'warning', 'danger', 'primary'];
    
    const interests = this.interestDatas.map( (interest, i) => {
      
      return (
        <span
          key={i}
          className={`label label-${color[parseInt(i / 5) > 4 ? 4 : parseInt(i / 5)]}`}
          style={style}>
          {interest}
        </span>
      );
    });
    
    return (
      <div>
        <h1 className={this.props.className}>Interest</h1>
        <h3>{interests}</h3>
      </div>
    );
  }
}