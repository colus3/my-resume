/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

import Profile from './contents/Profile';
import WorkExp from './contents/WorkExp';
import ProjectExp from './contents/ProjectExp';
import Education from './contents/Education';
import Skill from './contents/Skill';
import Interest from './contents/Interest';

const propTypes = {
  contents: React.PropTypes.object
};

class Content extends React.Component {
  
  render() {
    
    let leftContents = new Array();
    let rightContents = new Array();
    let bottomContents = new Array();
  
    Object.keys(this.props.contents)
      .map( (key, index) => {
        
        switch ( this.props.contents[key].align ) {
        case 'left'  :
          leftContents.push(contentFactory(key, index, this.props.contents[key])); break;
        case 'right' :
          rightContents.push(contentFactory(key, index, this.props.contents[key])); break;
        case 'bottom':
          bottomContents.push(contentFactory(key, index, this.props.contents[key])); break;
        }
      });

    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              {leftContents}
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              {rightContents}
            </Col>
          </Row>
        </Grid>
        <div className="page-break"></div>
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              {bottomContents}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

Content.propTypes = propTypes;

const contentFactory = (contentName, index, data) => {
  switch ( contentName ) {
  case 'profile': return (<Profile key={index} data={data}/>);
  case 'education': return (<Education key={index} data={data}/>);
  case 'skill': return (<Skill key={index} data={data}/>);
  case 'work': return (<WorkExp key={index} data={data}/>);
  case 'interest': return (<Interest key={index} data={data}/>);
  case 'project': return (<ProjectExp key={index} data={data}/>);
  default: return '';
  }
};

const mapStateToProps = (state) => {
  return {
    contents: state.contents
  };
};

export default connect(mapStateToProps)(Content);