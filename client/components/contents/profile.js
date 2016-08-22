/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';

export default class Profile extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  static propTypes() {
    return {
      'className': React.PropTypes.string
    };
  }
  
  render() {
    return (
      <div>
        <h1 className={this.props.className}>PROFILE</h1>
        <p>
          저는 프로그래밍 일을 한지 9년된 프로그래머 입니다.
          C/C++과 Java로 Unix/Linux에서 돌아가는 데몬 형태의 프로세스를 주로 개발 했고,
          최근에는 Spring을 이용한 WEB 프로젝트를 주로 했었지만 다른 언어에도 관심이 많습니다.
          <br/>그리고 새로운 기술이나 언어에 대한 두려움 따윈 없습니다.
          새로운 기술을 이용한 새로운 프로젝트를 더 좋아하고, 지금까지 해보지 않았던 일을 하는 걸 좋아합니다.
        </p>
      </div>
    );
  }
}