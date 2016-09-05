/**
 * Created by Colus on 2016. 8. 21..
 */
import React from 'react';
import TimeLineData from '../../models/timelineData';

const propTypes = {
  datas: React.PropTypes.array,
  useYearLabel: React.PropTypes.bool
};

class TimeLine2 extends React.Component {
  
  constructor() {
    super();
  }
  
  render() {
    
    const style={ 'display': 'inline-block', 'marginRight': '5px', 'color': '#fff' };
  
    let yearLebel = '';
    const timeLines = this.props.datas.reduce((list, data, index) => {
  
      let label;
      if ( this.props.useYearLabel && yearLebel !== data.startDate.substr(0, 4) ) {
        yearLebel = data.startDate.substr(0, 4);
        label = (
          <span key={`timeline-label${index}`} className="timeline-label">
            <span className="label label-primary">{yearLebel}</span>
          </span>
        );
      }
      
      const item = (
        <div key={data.id} className="timeline-item">
          <div className="timeline-point timeline-point-blank timeline-point-success"></div>
          <div className="timeline-event">
              <div className="timeline-heading">
                <h4 className="timeline-title">
                  <span name="title">{data.startDate} ~ {data.endDate} <strong>{data.title}</strong> </span>
                </h4>
              </div>
              <div className="timeline-body">
              <p>{data.desc === '' ? '' : data.desc}</p>
              <p>
                {data.badges === [] ? '' : data.badges.map( (badge, i) => ( <span key={i} className="label label-primary" style={style}>{badge}</span> ) )}
              </p>
              </div>
          </div>
        </div>
      );
      
      return list.concat([label, item]);
    }, []);
  
    return (
      <div className="timeline">
        {timeLines}
      </div>
    );
  }
}

TimeLine2.propTypes = propTypes;

export default TimeLine2;