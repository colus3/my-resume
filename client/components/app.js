/**
 * Created by Colus on 2016. 8. 19..
 */
import React from 'react';
import Title from './title';
import Content from './content';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Title/>
        <Content/>
      </div>
    );
  }
}