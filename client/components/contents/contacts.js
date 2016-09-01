/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { connect } from 'react-redux';
import { DateFormat, DateTime } from 'dateutils';

class Contacts extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      birthDate: this.props.birthDate,
      phone: this.props.phone,
      email: this.props.email,
      address: this.props.address,
      homepage: this.props.homepage
    };
  
    this.handleHomePage = this.handleHomePage.bind(this);
  }
  
  static propTypes() {
    return {
      address: React.PropTypes.string,
      name: React.PropTypes.string,
      phone: React.PropTypes.string,
      email: React.PropTypes.string,
      birthDate: React.PropTypes.object,
      homepage: React.PropTypes.string
    };
  }
  
  handleHomePage() {
    window.location.assign(`http://${this.state.homepage}`);
  }
  
  render() {
    return (
      <div className="col-xs-12 col-sm-4 col-md-5">
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
            <a href="#" onClick={this.handleHomePage}>{this.state.homepage}</a> <span className="glyphicon glyphicon-link" aria-hidden="true"/>
          </h4>
        </address>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    phone: state.phone,
    email: state.email,
    address: state.address,
    birthDate: DateFormat.format(DateTime.fromDateObject(new Date(state.birthDate)), 'Y-m-d'),
    homepage: state.homepage
    
  };
};

export default connect(mapStateToProps)(Contacts);