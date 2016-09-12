/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { connect } from 'react-redux';
import { DateFormat, DateTime } from 'dateutils';

const propTypes = {
  address: React.PropTypes.string,
  name: React.PropTypes.string,
  phone: React.PropTypes.string,
  email: React.PropTypes.string,
  birthDate: React.PropTypes.string,
  homepage: React.PropTypes.string,
  resumeId: React.PropTypes.string
};

class Contacts extends React.Component {
  
  constructor(props) {
    super(props);
  
    this.handleHomePage = this.handleHomePage.bind(this);
  }
  
  handleHomePage() {
    window.location.assign(`${this.props.homepage}/resume/${this.props.resumeId}`);
  }
  
  render() {
    return (
      <address>
        <h4 className="text-right">
          {this.props.birthDate} <span className="glyphicon glyphicon-user" aria-hidden="true"/>
        </h4>
        <h4 className="text-right">
          <abbr title="phone">{this.props.phone}</abbr> <span className="glyphicon glyphicon-earphone" aria-hidden="true"/>
        </h4>
        <h4 className="text-right">
          <a href={`mailto:${this.props.email}`}>{this.props.email}</a> <span className="glyphicon glyphicon-envelope" aria-hidden="true"/>
        </h4>
        <h4 className="text-right">
          {this.props.address} <span className="glyphicon glyphicon-home" aria-hidden="true"/>
        </h4>
        <h4 className="text-right">
          <a href="#" onClick={this.handleHomePage}>Link</a> <span className="glyphicon glyphicon-link" aria-hidden="true"/>
        </h4>
      </address>
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