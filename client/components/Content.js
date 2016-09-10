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
  profiles: React.PropTypes.object,
  works: React.PropTypes.object,
  educations: React.PropTypes.object,
  interests: React.PropTypes.object,
  skills: React.PropTypes.object,
  projects: React.PropTypes.object
};

class Content extends React.Component {
  
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <Profile data={this.props.profiles} />
              <WorkExp data={this.props.works} />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              {/*<Education data={this.props.educations} />*/}
              <Education/>
              <Skill data={this.props.skills} />
              <Interest data={this.props.interests} />
            </Col>
          </Row>
        </Grid>
        <div className="page-break"></div>
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <ProjectExp data={this.props.projects} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

Content.propTypes = propTypes;

const mapStateToProps = (state) => {
  return {
    profiles: state.contents.profile,
    works: state.contents.work,
    educations: state.contents.education,
    interests: state.contents.interest,
    skills: state.contents.skill,
    projects: state.contents.project
  };
};

export default connect(mapStateToProps)(Content);