/**
 * Created by Colus on 2016. 8. 21..
 */
import React from 'react';
import TimeLineData from '../../models/timelineData';

export default class TimeLine extends React.Component {
  
  constructor() {
    super();
  }
  
  static propTypes() {
    return {
      datas: React.PropTypes.object
    };
  }
  
  render() {
    
    const style={ 'display': 'inline-block', 'marginRight': '5px' };
  
    const timeLines = this.props.datas.map( data => {
      
      const timeLineHead = (
        <div className="timeline-heading">
          <h4 className="timeline-title">
            <span name="title"><strong>{data.title}</strong> </span>
          </h4>
        </div>
      );
      
      const timeLineBody = (
        <div className="timeline-body">
          <p>{data.desc === '' ? '' : data.desc}</p>
          <p>
            {data.badges === [] ? '' : data.badges.map( (badge, i) => ( <span key={i} className="label label-primary" style={style}>{badge}</span> ) )}
          </p>
        </div>
      );
      
      return (
        <li key={data.id}>
          <div className="timeline-badge neutral"></div>
          <div className="timeline-panel">
            {timeLineHead}
            {timeLineBody}
          </div>
        </li>
      );
    });
    
    return (
      <ul className="timeline">
        {timeLines}
      </ul>
    );
  }
}