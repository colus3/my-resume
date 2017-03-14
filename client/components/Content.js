/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import { connect } from 'react-redux';

import { ContentType1, ContentType2, Profile, WorkExp, WorkExp2, ProjectExp, Education, Certification, Skill, Interest } from '../components';

const propTypes = {
  resumeType: React.PropTypes.number,
  contents: React.PropTypes.array
};

class Content extends React.Component {
  
  render() {

    let leftContents = [];
    let rightContents = [];
    let bottomContents = [];

    this.props.contents
        .map(value => {
          switch (value.position) {
          case 35: console.log('top'); break;
          case 36: leftContents.push(contentFactory(this.props.resumeType, value.content_type, value.id, value)); break;
          case 37: rightContents.push(contentFactory(this.props.resumeType, value.content_type, value.id, value)); break;
          case 38: bottomContents.push(contentFactory(this.props.resumeType, value.content_type, value.id, value)); break;
          }
        });

    switch (this.props.resumeType) {
    case 1:
      return (<ContentType1 resumeUIType='bootstrap' left={leftContents} right={rightContents} bottom={bottomContents}/>);
    case 2:
      return (<ContentType2 resumeUIType='bootstrap' left={leftContents} right={rightContents} bottom={bottomContents}/>);
    }
  }
}

Content.propTypes = propTypes;

const contentFactory = (resumeType, contentType, index, data) => {
  switch ( contentType ) {
  case 1: return (<Profile key={index} resumeUIType='bootstrap' data={data}/>);
  case 2: return (<Education key={index} resumeUIType='bootstrap' data={data}/>);
  case 3: return (<Certification key={index} resumeUIType='bootstrap' data={data}/>);
  case 4: return (<Interest key={index} resumeUIType='bootstrap' data={data}/>);
  case 5: return resumeType === 1 ? (<WorkExp key={index} resumeUIType='bootstrap' data={data}/>) : (<WorkExp2 key={index} resumeUIType='bootstrap' data={data}/>);
  case 6: return (<ProjectExp key={index} resumeUIType='bootstrap' data={data}/>);
  case 7: return (<Skill key={index} resumeUIType='bootstrap' data={data}/>);
  case 8: return (<Profile key={index} resumeUIType='bootstrap' data={data}/>);
  default: return '';
  }
};

const mapStateToProps = (state) => {
  return {
    resumeType: state.resume_type,
    contents: state.ResumeContents
  };
};

export default connect(mapStateToProps)(Content);