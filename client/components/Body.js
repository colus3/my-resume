/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { connect } from 'react-redux';

import { ContentType1, ContentType2, Contacts, Profile, WorkExp, ProjectExp, Education, Certification, Skill, Interest, Interest2, Position, ResumeType, ContentType } from '../components';

class Body extends React.Component {
  
  render() {

    let leftContents = [];
    let rightContents = [];
    let bottomContents = [];

    this.props.contents
        .map(content => {
          switch (content.position) {
          case Position.TOP:    console.log('top'); break;
          case Position.LEFT:   leftContents.push(contentFactory(this.props.resumeType, this.props.resumeUIType, content)); break;
          case Position.RIGHT:  rightContents.push(contentFactory(this.props.resumeType, this.props.resumeUIType, content)); break;
          case Position.BOTTOM: bottomContents.push(contentFactory(this.props.resumeType, this.props.resumeUIType, content)); break;
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

Body.propTypes = {
  resumeType: React.PropTypes.number,
  resumeUIType: React.PropTypes.string,
  contents: React.PropTypes.array
};

const contentFactory = (resumeType, resumeUIType, content) => {
  switch ( content.content_type ) {
  case ContentType.Contacts:      return (<Contacts key={content.id} resumeUIType={resumeUIType} data={content}/>);
  case ContentType.Profile:       return (<Profile key={content.id} resumeUIType={resumeUIType} data={content}/>);
  case ContentType.Education:     return (<Education key={content.id} resumeUIType={resumeUIType} data={content}/>);
  case ContentType.Certification: return (<Certification key={content.id} resumeUIType={resumeUIType} data={content}/>);
  case ContentType.Interest:      return (<Interest key={content.id} resumeUIType={resumeUIType} data={content}/>);
  case ContentType.WorkExp:       return (<WorkExp key={content.id} resumeUIType={resumeUIType} data={content}/>);
  case ContentType.ProjectExp:    return (<ProjectExp key={content.id} resumeUIType={resumeUIType} data={content}/>);
  case ContentType.Skill:         return (<Skill key={content.id} resumeUIType={resumeUIType} data={content}/>);
  // case ContentType.selfIntro:     return (<Profile key={index} resumeUIType={resumeUIType} data={data}/>);
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

export default connect(mapStateToProps)(Body);