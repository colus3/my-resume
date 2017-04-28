/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { DateFormat, DateTime, DateLocale } from 'dateutils';
import { connect } from 'react-redux';
import { ContentItem } from '../../components';
import _ from 'lodash';

const data = {
  phone: '',
  email: '',
  address: '',
  birthDate: ''
};

class Contacts extends React.Component {

  constructor(props) {
    super(props);

    props.data.contents.map(contacts => {
      switch (contacts.title) {
      case 'Email':     data.email = contacts.contents; break;
      case 'Phone':     data.phone = contacts.contents; break;
      case 'Address':   data.address = contacts.contents; break;
      case 'BirthDate': data.birthDate = contacts.contents; break;
      }
    });

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
    if (_.isEmpty(this.props.data) || _.isEmpty(this.props.data.contents)) {
      return (<ContentItem />);
    }

    const imgStyle = { height: '150px' };

    const contentItems = [];
    contentItems.push(
      <div>
        <img src={this.props.image} className="img-responsive img-circle center-block"
             alt="Responsive image" style={imgStyle}/>
        <address>
          <h4 className="text-left">
            <span className="glyphicon glyphicon-user" aria-hidden="true"/> {data.birthDate}
          </h4>
          <h4 className="text-left">
            <span className="glyphicon glyphicon-earphone" aria-hidden="true"/> <abbr title="phone">{data.phone}</abbr>
          </h4>
          <h4 className="text-left">
            <span className="glyphicon glyphicon-envelope" aria-hidden="true"/> <a href="#" onClick={this.handleMailTo}>{data.email}</a>
          </h4>
          <h4 className="text-left">
            <span className="glyphicon glyphicon-home" aria-hidden="true"/> {data.address}
          </h4>
          <h4 className="text-left">
            <span className="glyphicon glyphicon-link" aria-hidden="true"/> <a href="#" onClick={this.handleResumeUrl}>{this.props.resumeUrl}</a>
          </h4>
        </address>
      </div>
    );

    return (<ContentItem resumeUIType={this.props.resumeUIType} contentItems={contentItems}/>);
  }
}

Contacts.defaultProps = {
  resumeUrl: '',
  image: '',
  resumeUIType: '',
  data: { display_name: '', type: '', contents: [] },
};

Contacts.propTypes = {
  resumeUrl: React.PropTypes.string,
  image: React.PropTypes.string,
  resumeUIType: React.PropTypes.string,
  data: React.PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    resumeUrl: state.resume_short_url,
    image: state.User.image
  };
};

export default connect(mapStateToProps)(Contacts);