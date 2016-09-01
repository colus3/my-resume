/**
 * Created by Colus on 2016. 8. 21..
 */
import React from 'react';
import TimeLineData from '../../models/timelineData';

export default class TimeLine2 extends React.Component {
  
  constructor() {
    super();
  }
  
  static propTypes() {
    return {
      datas: React.PropTypes.object
    };
  }
  
  render() {
    
    const style={ 'display': 'inline-block', 'marginRight': '5px', 'color': '#fff' };
  
    const timeLines = this.props.datas.map( data => {
      
      const timeLineHead = (
        <div className="timeline-heading">
          <h4 className="timeline-title">
            <span name="title">{data.startDate} ~ {data.endDate} <strong>{data.title}</strong> </span>
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
  
      // const timeLineFooter = (
      //   <div className="timeline-footer">
      //     <p className="text-right">{period}</p>
      //   </div>
      // );
      
      return (
        <div key={data.id} className="timeline-item">
          <div className="timeline-point timeline-point-blank timeline-point-success"></div>
          <div className="timeline-event">
            {timeLineHead}
            {timeLineBody}
          </div>
        </div>
      );
    });
    
    return (
      <div className="timeline">
        {timeLines}
      </div>
    );
  }
}