/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
// import { connect } from 'react-redux';
import { DateFormat, DateTime, DateLocale } from 'dateutils';
import { ContentItem } from '../../components';
import _ from 'lodash';

// const propTypes = {
//   address: React.PropTypes.string,
//   name: React.PropTypes.string,
//   phone: React.PropTypes.string,
//   email: React.PropTypes.string,
//   birthDate: React.PropTypes.string,
//   resumeUrl: React.PropTypes.string
// };

const data = {
  phone: "",
  email: "",
  resumeUrl: "",
  address: "",
  birthDate: ""
};

class Contacts extends React.Component {

  constructor(props) {
    super(props);

    props.data.contents.map(contacts => {
      switch (contacts.title) {
      case "Email": data.email = contacts.contents; break;
      case "Phone": data.phone = contacts.contents; break;
      case "Address": data.address = contacts.contents; break;
      case "BirthDate": data.birthDate = contacts.contents; break;
      }
    });

    if (_.isEmpty(props.resumeUrl)) {
      data.resumeUrl = props.resumeUrl;
    }

    this.handleResumeUrl = this.handleResumeUrl.bind(this);
    this.handleMailTo = this.handleMailTo.bind(this);
  }

  handleResumeUrl() {
    window.location.assign(`${data.resumeUrl}`);
  }

  handleMailTo() {
    window.location.assign(`mailto:${data.email}`);
  }

  render() {
    if (_.isEmpty(props.data.contents)) {
      return (<ContentItem />);
    }

    return (
      <address>
        <h4 className="text-right">
          {data.birthDate} <span className="glyphicon glyphicon-user" aria-hidden="true"/>
        </h4>
        <h4 className="text-right">
          <abbr title="phone">{data.phone}</abbr> <span className="glyphicon glyphicon-earphone" aria-hidden="true"/>
        </h4>
        <h4 className="text-right">
          <a href="#" onClick={this.handleMailTo}>{data.email}</a> <span className="glyphicon glyphicon-envelope" aria-hidden="true"/>
        </h4>
        <h4 className="text-right">
          {data.address} <span className="glyphicon glyphicon-home" aria-hidden="true"/>
        </h4>
        <h4 className="text-right">
          <a href="#" onClick={this.handleResumeUrl}>{data.resumeUrl}</a> <span className="glyphicon glyphicon-link" aria-hidden="true"/>
        </h4>
      </address>
    );
  }
}

export default Contacts;

// class Contacts extends React.Component {
//
//   constructor(props) {
//     super(props);
//
//     this.handleResumeUrl = this.handleResumeUrl.bind(this);
//     this.handleMailTo = this.handleMailTo.bind(this);
//   }
//
//   handleResumeUrl() {
//     window.location.assign(`${this.props.resumeUrl}`);
//   }
//
//   handleMailTo() {
//     window.location.assign(`mailto:${this.props.email}`);
//   }
//
//   render() {
//     return (
//       <address>
//         <h4 className="text-right">
//           {this.props.birthDate} <span className="glyphicon glyphicon-user" aria-hidden="true"/>
//         </h4>
//         <h4 className="text-right">
//           <abbr title="phone">{this.props.phone}</abbr> <span className="glyphicon glyphicon-earphone" aria-hidden="true"/>
//         </h4>
//         <h4 className="text-right">
//           <a href="#" onClick={this.handleMailTo}>{this.props.email}</a> <span className="glyphicon glyphicon-envelope" aria-hidden="true"/>
//         </h4>
//         <h4 className="text-right">
//           {this.props.address} <span className="glyphicon glyphicon-home" aria-hidden="true"/>
//         </h4>
//         <h4 className="text-right">
//           <a href="#" onClick={this.handleResumeUrl}>{this.props.resumeUrl}</a> <span className="glyphicon glyphicon-link" aria-hidden="true"/>
//         </h4>
//       </address>
//     );
//   }
// }
//
// Contacts.propTypes = propTypes;
//
// const mapStateToProps = (state) => {
//
//   return {
//     phone: state.User.phone,
//     email: state.User.email,
//     address: state.User.address,
//     birthDate: DateFormat.format(DateTime.fromDateObject(new Date(state.User.birth_date)), 'Y-m-d', DateLocale.EN),
//     resumeUrl: state.resume_short_url
//   };
// };
//
// export default connect(mapStateToProps)(Contacts);