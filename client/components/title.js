/**
 * Created by Colus on 2016. 8. 19..
 */
import React from 'react';
import Contacts from './contacts';

export default class Title extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      name: 'Donghwan Lee',
      description: '믿음이 가는 프로그래머',
      userImage: 'images/my-image.jpg'
    };
  }
  
  
  render() {
    const baseStyle = { color: '#cdbfe3', backgroundColor: '#6f5499' };
    const nameStyle = { color: '#fff' };
    var imgStyle = { height: '150px' };
    
    return (
      <div className="jumbotron" id="content" tabIndex="-1" style={baseStyle}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-5">
              <h1 className="visible-xs-inline-block visible-sm-inline-block visible-lg-inline-block" style={nameStyle}>{this.state.name}</h1>
              <h2 className="visible-md-inline-block" style={nameStyle}>{this.state.name}</h2>
              <h2>{this.state.description}</h2>
              <p className="lead">
                <a className="btn btn-outline-inverse btn-lg hidden-print" href="api/download" role="button">PDF 다운로드</a>
              </p>
            </div>
            <div className="col-md-2 visible-md-block visible-lg-block">
              <p>
                <img src={this.state.userImage} className="img-responsive img-circle center-block"
                     alt="Responsive image" style={imgStyle}/>
              </p>
            </div>
            <Contacts className="col-xs-12 col-sm-4 col-md-5"/>
          </div>
        </div>
      </div>
    );
  }
  

}