/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import { DateFormat, DateTime } from 'dateutils';

const propTypes = {
  address: React.PropTypes.string,
  name: React.PropTypes.string,
  phone: React.PropTypes.string,
  email: React.PropTypes.string,
  birthDate: React.PropTypes.object,
  homepage: React.PropTypes.string,
  resumeId: React.PropTypes.string
};

class Contacts extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      birthDate: this.props.birthDate,
      phone: this.props.phone,
      email: this.props.email,
      address: this.props.address,
      homepage: this.props.homepage,
      resumeId: this.props.resumeId
    };
  
    this.handleHomePage = this.handleHomePage.bind(this);
  }
  
  handleHomePage() {
    window.location.assign(`${this.state.homepage}/resume/${this.state.resumeId}`);
  }
  
  render() {
    return (
      <Col xs={12} sm={4} md={5}>
        <address>
          <h4 className="text-right">
            {this.state.birthDate} <span className="glyphicon glyphicon-user" aria-hidden="true"/>
          </h4>
          <h4 className="text-right">
            <abbr title="phone">{this.state.phone}</abbr> <span className="glyphicon glyphicon-earphone" aria-hidden="true"/>
          </h4>
          <h4 className="text-right">
            <a href={`mailto:${this.state.email}`}>{this.state.email}</a> <span className="glyphicon glyphicon-envelope" aria-hidden="true"/>
          </h4>
          <h4 className="text-right">
            {this.state.address} <span className="glyphicon glyphicon-home" aria-hidden="true"/>
          </h4>
          <h4 className="text-right">
            <a href="#" onClick={this.handleHomePage}>Link</a> <span className="glyphicon glyphicon-link" aria-hidden="true"/>
          </h4>
        </address>
      </Col>
    );
  }
}

Contacts.propTypes = propTypes;

const mapStateToProps = (state) => {

  return {
    phone: state.phone,
    email: state.email,
    address: state.address,
    birthDate: DateFormat.format(DateTime.fromDateObject(new Date(state.birthDate)), 'Y-m-d'),
    homepage: state.homepage,
    resumeId: state.resumeId
  };
};

export default connect(mapStateToProps)(Contacts);