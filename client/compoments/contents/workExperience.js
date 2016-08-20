/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';

export default class WorkExperience extends React.Component {
  
  static propTypes() {
    return {
      className: React.PropTypes.string
    };
  }
  
  constructor() {
    super();
  }
  
  render() {
    const style={ 'display': 'inline-block', 'margin-right': '5px' };
    
    return (
      <div>
        <h1 className={this.props.className}>WORK EXPERIENCE</h1>
        <ul className="timeline">
          <li>
            <div className="timeline-badge neutral"></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">
                  <span name="title">2008. 02 WideTNS </span>
                  <span className="label label-primary" style={style}>C/C++</span>
                  <span className="label label-success" style={style}>Java</span>
                  <span className="label label-info" style={style}>Unix/Linux</span>
                </h4>
              </div>
              <div className="timeline-body">
                <p>C/C++/Java Unix/Linux 프로세스 개발</p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-badge neutral"></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">
                  <span name="title">2012. 01 프리랜서</span>
                  <span className="label label-primary" style={style}>C/C++</span>
                  <span className="label label-success" style={style}>Java</span>
                  <span className="label label-info" style={style}>Unix</span>
                </h4>
              </div>
              <div className="timeline-body">
                <p>LG U+ NMS 서비스 개발</p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-badge neutral"></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">2013. 12 CodeBEAN</h4>
              </div>
              <div className="timeline-body">
                <p>SKT, LG전자등 Spring을 이용한 웹 개발</p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-badge neutral"></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">2016. 08 현재 실업자</h4>
              </div>
              <div className="timeline-body">
                <p>나이를 먹으며 늙어가는 중...</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}