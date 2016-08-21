/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import LeftContent from './left';
import RightContent from './right';

export default class Content extends React.Component {
  
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <LeftContent className="col-xs-12 col-sm-12 col-md-6 col-lg-6"/>
          <RightContent className="col-xs-12 col-sm-12 col-md-6 col-lg-6"/>
        </div>
      </div>
    );
  }
}