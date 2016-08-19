/**
 * Created by Colus on 2016. 8. 19..
 */
import React from 'react';
import Title from './title';

export default class App extends React.Component {
  
  render() {
    return (
      <div>
        <Title/>
        <h3>Example heading <span className="label label-default">New</span></h3>
      </div>
    );
  }
}