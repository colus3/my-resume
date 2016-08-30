/**
 * Created by Colus on 2016. 8. 19..
 */
import React from 'react';
import { connect } from 'react-redux';

import Title from './title';
import Content from './content';

class App extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  static propTypes() {
    return {
      // status: React.PropTypes.object
    };
  }
  
  render() {
    
    // console.log(`status2 : ${JSON.stringify(this.props.status)}`);
    
    return (
      <div>
        <Title/>
        <Content/>
      </div>
    );
  }
  
}

// const mapStateToProps = (state) => {
//
//   console.log(`status1 : ${JSON.stringify(state)}`);
//
//   return {
//     status: state
//   };
// };

export default App;