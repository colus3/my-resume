/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';

export default class Contacts extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      birthDate: '1982.01.26',
      phone: '010-2041-9909',
      email: 'colus4@gmail.com',
      address: '인천 서구 청마로4번길 6'
    };
  }
  
  static propTypes() {
    return {
      className: React.PropTypes.string
    };
  }
  
  render() {
    return (
      <div className={this.props.className}>
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
        </address>
      </div>
    );
  }
}