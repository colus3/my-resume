/**
 * Created by colus on 2017. 3. 14..
 */
import React from 'react';

import { PageHeader as BootstrapHeader } from 'react-bootstrap';
import { Header as SemanticHeader, Divider as SemanticDivider } from 'semantic-ui-react';

const ContentItem = (props) => {

  switch( props.resumeUIType ) {
  case 'bootstrap':
    return (
        <div key={props.title}>
          <BootstrapHeader>{props.title}</BootstrapHeader>
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
  }
};

ContentItem.propTypes = { resumeUIType: React.PropTypes.string, title: React.PropTypes.string, contentItems: React.PropTypes.array };
ContentItem.defaultProps = { resumeUIType: '', title: '', contentItems: [] };

export default ContentItem;