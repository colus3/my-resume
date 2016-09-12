/**
 * Created by Colus on 2016. 8. 19..
 */
import React from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';

import Contacts from './contents/Contacts';

const propTypes = {
  name: React.PropTypes.string,
  moto: React.PropTypes.string,
  resumeId: React.PropTypes.string,
  image: React.PropTypes.string
};

class Title extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      name: this.props.name,
      moto: this.props.moto,
      resumeId: this.props.resumeId,
      image: this.props.image
    };
    
    this.handleDownload = this.handleDownload.bind(this);
  }
  
  handleDownload() {
    window.location.assign(`/api/download/${this.state.resumeId}`);
  }
  
  render() {
    const baseStyle = { color: '#cdbfe3', backgroundColor: '#6f5499', paddingBottom: '6px' };
    const nameStyle = { color: '#fff' };
    var imgStyle = { height: '150px' };
    
    return (
      <Jumbotron id="content" tabIndex="-1" style={baseStyle}>
        <Grid fluid>
          <Row>
            <Col xs={12} sm={8} md={5}>
              <h1 className="visible-xs-inline-block visible-sm-inline-block visible-lg-inline-block" style={nameStyle}>{this.state.name}</h1>
              <h2 className="visible-md-inline-block" style={nameStyle}>{this.state.name}</h2>
              <h2>{this.state.moto}</h2>
              <p className="lead">
                <a className="btn btn-outline-inverse btn-lg hidden-print" href="#" onClick={this.handleDownload} role="button">PDF 다운로드</a>
              </p>
            </Col>
            <Col md={2} className="visible-md-block visible-lg-block">
              <p>
                <img src={this.state.image} className="img-responsive img-circle center-block"
                     alt="Responsive image" style={imgStyle}/>
              </p>
            </Col>
            <Col xs={12} sm={4} md={5}>
              <Contacts/>
            </Col>
          </Row>
        </Grid>
        <h6 className="visible-lg-inline-block"> <span className="glyphicon glyphicon-console"></span> 이 페이지는 NodeJs, ExpressJs, ReactJs, Redux, OrientDB, Bootstrap, PhantomJs 등을 이용하여 제작되었습니다.</h6>
      </Jumbotron>
    );
  }
}

Title.propTypes = propTypes;

const mapStateToProps = (state) => {
  return {
    name: state.name,
    moto: state.moto,
    resumeId: state.resumeId,
    image: state.image
  };
};

export default connect(mapStateToProps)(Title);