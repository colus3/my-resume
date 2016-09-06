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
  profiles: React.PropTypes.array,
  works: React.PropTypes.array,
  educations: React.PropTypes.array,
  interests: React.PropTypes.array,
  skills: React.PropTypes.array,
  projects: React.PropTypes.array
};

class Content extends React.Component {
  
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <Profile datas={this.props.profiles} />
              <WorkExp datas={this.props.works} />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <Education datas={this.props.educations} />
              <Skill datas={this.props.skills} />
              <Interest datas={this.props.interests} />
            </Col>
          </Row>
        </Grid>
        <div className="page-break"></div>
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <ProjectExp datas={this.props.projects} />
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