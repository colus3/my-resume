/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Profile from './contents/Profile';
import WorkExp from './contents/WorkExp';
import ProjectExp from './contents/ProjectExp';
import Education from './contents/Education';
import Skill from './contents/Skill';
import Interest from './contents/Interest';

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