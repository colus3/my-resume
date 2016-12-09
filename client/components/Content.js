/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

import { Profile, WorkExp, ProjectExp, Education, Certification, Skill, Interest } from '../components';

const propTypes = {
  contents: React.PropTypes.array
};

class Content extends React.Component {
  
  render() {
    
    let leftContents = [];
    let rightContents = [];
    let bottomContents = [];

    this.props.contents
        .map( value => {
          switch ( value.position ) {
          case 35: console.log('top'); break;
          case 36: leftContents.push(contentFactory(value.content_type, value.id, value)); break;
          case 37: rightContents.push(contentFactory(value.content_type, value.id, value)); break;
          case 38: bottomContents.push(contentFactory(value.content_type, value.id, value)); break;
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

const contentFactory = (contentType, index, data) => {
  switch ( contentType ) {
  case 1: return (<Profile key={index} data={data}/>);
  case 2: return (<Education key={index} data={data}/>);
  case 3: return (<Certification key={index} data={data}/>);
  case 4: return (<Interest key={index} data={data}/>);
  case 5: return (<WorkExp key={index} data={data}/>);
  case 6: return (<ProjectExp key={index} data={data}/>);
  case 7: return (<Skill key={index} data={data}/>);
  case 8: return (<Profile key={index} data={data}/>);
  default: return '';
  }
};

const mapStateToProps = (state) => {
  return {
    contents: state.ResumeContents
  };
};

export default connect(mapStateToProps)(Content);