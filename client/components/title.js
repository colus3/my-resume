/**
 * Created by Colus on 2016. 8. 19..
 */
import React from 'react';
import Contacts from './contents/contacts';
import { connect } from 'react-redux';

class Title extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      name: this.props.name,
      moto: this.props.moto,
      userImage: 'images/my-image.jpg'
    };
    
    this.handleDownload = this.handleDownload.bind(this);
  }
  
  handleDownload() {
    location.href = 'api/download';
    return false;
  }
  
  static propTypes() {
    return {
      name: React.PropTypes.string,
      moto: React.PropTypes.string
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
              <h2>{this.state.moto}</h2>
              <p className="lead">
                <a className="btn btn-outline-inverse btn-lg hidden-print" onClick={this.handleDownload} role="button">PDF 다운로드</a>
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

const mapStateToProps = (state) => {
  return {
    name: state.name,
    moto: state.moto
    
  };
};

export default connect(mapStateToProps)(Title);