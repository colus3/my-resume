/**
 * Created by Colus on 2016. 8. 19..
 */
import React from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';

import { Contacts } from '../components';

class Title extends React.Component {

  constructor(props) {
    super(props);

    this.handleDownload = this.handleDownload.bind(this);
  }

  handleDownload() {
    window.location.assign(`${this.props.apiServerUrl}/download?url=${encodeURIComponent(this.props.resumeUrl)}`);
  }

  render() {
    const baseStyle = {
      // color: '#cdbfe3',
      color: '#fff',
      // backgroundColor: '#6f5499',
      backgroundImage: 'url(https://source.unsplash.com/category/nature/1600x400)',
      backgroundSize: 'cover',
      paddingBottom: '6px' };
    const nameStyle = { color: '#fff' };
    const imgStyle = { height: '150px' };

    return (
      <Jumbotron id="content" tabIndex="-1" style={baseStyle}>
        <Grid fluid>
          <Row>
            <Col xs={12} sm={8} md={5}>
              <h1 className="visible-xs-inline-block visible-sm-inline-block visible-lg-inline-block" style={nameStyle}>{this.props.name}</h1>
              <h2 className="visible-md-inline-block" style={nameStyle}>{this.props.name}</h2>
              <h2>{this.props.moto}</h2>
              <p className="lead">
                <a className="btn btn-outline-inverse btn-lg hidden-print" href="#" onClick={this.handleDownload} role="button">Download PDF</a>
              </p>
            </Col>
            <Col md={2} className="visible-md-block visible-lg-block">
              <p>
                <img src={this.props.image} className="img-responsive img-circle center-block"
                     alt="Responsive image" style={imgStyle}/>
              </p>
            </Col>
            <Col xs={12} sm={4} md={5}>
              <Contacts/>
            </Col>
          </Row>
        </Grid>
        <h6 className="visible-lg-inline-block">
          <span className="glyphicon glyphicon-console"/>
          This page is designed using Node.js, Express.js, React.js, Redux, MariaDB, Bootstrap, Phantom.js, TeamCity, Docker, AWS.
        </h6>
      </Jumbotron>
    );
  }
}

Title.propTypes = {
    name: React.PropTypes.string,
    moto: React.PropTypes.string,
    resumeUrl: React.PropTypes.string,
    apiServerUrl: React.PropTypes.string,
    image: React.PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    name: state.User.user_name,
    moto: state.User.moto,
    resumeUrl: state.resume_short_url,
    apiServerUrl: state.api_server_url,
    image: state.User.image
  };
};

export default connect(mapStateToProps)(Title);