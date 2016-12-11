/**
 * Created by Colus on 2016. 8. 19..
 */
import React from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';

import { Contacts } from '../components';

const propTypes = {
  name: React.PropTypes.string,
  moto: React.PropTypes.string,
  directAccessId: React.PropTypes.string,
  apiServerUrl: React.PropTypes.string,
  image: React.PropTypes.string
};

class Title extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      moto: this.props.moto,
      directAccessId: this.props.directAccessId,
      apiServerUrl: this.props.apiServerUrl,
      image: this.props.image
    };

    this.handleDownload = this.handleDownload.bind(this);
  }

  handleDownload() {
    window.location.assign(`${this.state.apiServerUrl}/download/${this.state.directAccessId}`);
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
                <a className="btn btn-outline-inverse btn-lg hidden-print" href="#" onClick={this.handleDownload} role="button">Download PDF</a>
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
        <h6 className="visible-lg-inline-block">
          <span className="glyphicon glyphicon-console"/>
          This page is designed using Node.js, Express.js, React.js, Redux, MariaDB, Bootstrap, Phantom.js, TeamCity, Docker, AWS.
        </h6>
      </Jumbotron>
    );
  }
}

Title.propTypes = propTypes;

const mapStateToProps = (state) => {
  return {
    name: state.User.user_name,
    moto: state.User.moto,
    directAccessId: state.direct_access_id,
    apiServerUrl: state.api_server_url,
    image: state.User.image
  };
};

export default connect(mapStateToProps)(Title);