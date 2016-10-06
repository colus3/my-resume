/**
 * Created by Colus on 2016. 8. 19..
 */
import React from 'react';

// import Title from './Title';
// import Content from './Content';

import { Title, Content } from 'components';

class App extends React.Component {
  
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