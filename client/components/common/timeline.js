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
      datas: React.PropTypes.object,
      usePeriod: React.PropTypes.bool
    };
  }
  
  render() {
    
    const style={ 'display': 'inline-block', 'marginRight': '5px', 'color': '#fff' };
    
    const timeLines = this.props.datas.map( data => {
  
      let period = '';
      if ( this.props.usePeriod ) {
        if ( data.period.year > 0 && data.period.month > 0 ) {
          period = ` ( ${data.period.year} 년 ${data.period.month} 개월 )`;
        } else if ( data.period.year > 0 && data.period.month <= 0 ) {
          period = ` ( ${data.period.year} 년 )`;
        } else if ( data.period.year <= 0 && data.period.month > 0 ) {
          period = ` ( ${data.period.month} 개월 )`;
        }
      }
          
      const timeLineHead = (
        <div className="timeline-heading">
          <h4 className="timeline-title">
            <span name="title">{data.startDate} ~ {data.endDate} <strong>{data.title}</strong>{period}</span>
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
        <div key={data.id} className="timeline-item">
          <div className="timeline-point"><i className="glyphicon glyphicon-star"></i></div>
          <div className="timeline-event">
            {timeLineHead}
            {timeLineBody}
          </div>
        </div>
      );
    });
    
    return (
      <div className="timeline timeline-single-column">
        {timeLines}
      </div>
    );
  }
}