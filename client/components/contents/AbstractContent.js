/**
 * Created by Colus on 2016. 9. 9..
 */
import React from 'react';

const propTypes = {
  data: React.PropTypes.object
};

const defaultProps = {
  data: {
    name: '',
    type: '',
    data: []
  }
};

class Content extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      content: this.props.data
    };
  }
}

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;