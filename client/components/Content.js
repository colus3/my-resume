/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { connect } from 'react-redux';

import { ContentType1, ContentType2, Profile, WorkExp, WorkExp2, ProjectExp, Education, Certification, Skill, Interest } from '../components';

const Position = {
  TOP: 35, LEFT: 36, RIGHT: 37, BOTTOM: 38
};

const ResumeType = {
  TYPE1: 1, TYPE2: 2
};

const ContentType = {
  Profile: 1, Education: 2, Certification: 3, Interest: 4, WorkExp: 5, ProjectExp: 6, Skill: 7, selfIntro: 8
}

class Content extends React.Component {
  
  render() {

    let leftContents = [];
    let rightContents = [];
    let bottomContents = [];

    this.props.contents
        .map(value => {
          switch (value.position) {
          case Position.TOP:    console.log('top'); break;
          case Position.LEFT:   leftContents.push(contentFactory(this.props.resumeType, this.props.resumeUIType, value.content_type, value.id, value)); break;
          case Position.RIGHT:  rightContents.push(contentFactory(this.props.resumeType, this.props.resumeUIType, value.content_type, value.id, value)); break;
          case Position.BOTTOM: bottomContents.push(contentFactory(this.props.resumeType, this.props.resumeUIType, value.content_type, value.id, value)); break;
          }
        });

    switch (this.props.resumeType) {
    case ResumeType.TYPE1:
      return (<ContentType1 resumeUIType={this.props.resumeUIType} left={leftContents} right={rightContents} bottom={bottomContents}/>);
    case ResumeType.TYPE2:
      return (<ContentType2 resumeUIType={this.props.resumeUIType} left={leftContents} right={rightContents} bottom={bottomContents}/>);
    }
  }
}

Content.propTypes = {
  resumeType: React.PropTypes.number,
  resumeUIType: React.PropTypes.string,
  contents: React.PropTypes.array
};

const contentFactory = (resumeType, resumeUIType, contentType, index, data) => {
  switch ( contentType ) {
  case ContentType.Profile:       return (<Profile key={index} resumeUIType={resumeUIType} data={data}/>);
  case ContentType.Education:     return (<Education key={index} resumeUIType={resumeUIType} data={data}/>);
  case ContentType.Certification: return (<Certification key={index} resumeUIType={resumeUIType} data={data}/>);
  case ContentType.Interest:      return (<Interest key={index} resumeUIType={resumeUIType} data={data}/>);
  case ContentType.WorkExp:       return resumeType === ResumeType.TYPE1 ? (<WorkExp key={index} resumeUIType={resumeUIType} data={data}/>) : (<WorkExp2 key={index} resumeUIType={resumeUIType} data={data}/>);
  case ContentType.ProjectExp:    return (<ProjectExp key={index} resumeUIType={resumeUIType} data={data}/>);
  case ContentType.Skill:         return (<Skill key={index} resumeUIType={resumeUIType} data={data}/>);
  case ContentType.selfIntro:     return (<Profile key={index} resumeUIType={resumeUIType} data={data}/>);
  default: return '';
  }
};

const mapStateToProps = (state) => {
  return {
    resumeType: state.resume_type,
    resumeUIType: state.resume_ui_type,
    contents: state.ResumeContents
  };
};

export default connect(mapStateToProps)(Content);