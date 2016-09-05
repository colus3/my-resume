/**
 * Created by Colus on 2016. 8. 19..
 */
import React from 'react';

import Title from './Title';
import Content from './Content';

class App extends React.Component {
  
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

export default App;