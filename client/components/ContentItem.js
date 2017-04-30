/**
 * Created by colus on 2017. 3. 14..
 */
import React from 'react';
import _ from 'lodash';

import { PageHeader as BootstrapHeader } from 'react-bootstrap';
import { Header as SemanticHeader, Divider as SemanticDivider } from 'semantic-ui-react';

const ContentItem = (props) => {

  switch( props.resumeUIType ) {
  case 'bootstrap':
    const title = _.isEmpty(props.title) ? '' : (<BootstrapHeader>{props.title}</BootstrapHeader>);
    return (
        <div key={props.title}>
          {title}
          {props.contentItems}
        </div>
    );
  case 'semantic-ui':
    return (
        <div key={props.title}>
          <SemanticHeader size="huge">{props.title}</SemanticHeader>
          {props.contentItems}
          <SemanticDivider />
        </div>
    );
  default: return (<div></div>);
  }
};

ContentItem.propTypes = { resumeUIType: React.PropTypes.string, title: React.PropTypes.string, contentItems: React.PropTypes.array };
ContentItem.defaultProps = { resumeUIType: '', title: '', contentItems: [] };

export default ContentItem;