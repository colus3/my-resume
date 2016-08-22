/**
 * Created by Colus on 2016. 8. 22..
 */
import React from 'react';

export default class Interest extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.interestDatas = [
      'Java', 'C/C++', 'Scala', 'AKKA', 'Node.js', 'React', 'iOS', 'Swift', 'Apache Spark', 'Docker', 'NoSQL', 'IoT'
    ];
  }
  
  static propTypes() {
    return {
      'className': React.PropTypes.string
    };
  }
  
  render() {
    const style={ 'display': 'inline-block', 'marginRight': '5px' };
    
    const interests = this.interestDatas.map( (interest, i) => {
      return (
        <span key={i} className="label label-primary" style={style}>{interest}</span>
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