/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Profile from './contents/profile';
import WorkExp from './contents/workExp';
import ProjectExp from './contents/projectExp';
import Education from './contents/education';
import Skill from './contents/skill';
import Interest from './contents/interest';

export default class Content extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <Profile/>
              <WorkExp/>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <Education/>
              <Skill/>
              <Interest/>
            </Col>
          </Row>
        </Grid>
        <div className="page-break"></div>
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <ProjectExp/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}