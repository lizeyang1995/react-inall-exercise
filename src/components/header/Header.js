import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './header.less';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <p>
          <Link to='/'>HOME</Link>
        </p>
        <p>
          <Link to='/calculator'>在线计算器</Link>
        </p>
        <p>
          <Link to='/timer'>在线倒计时器</Link>
        </p>
      </div>
    );
  }
}
export default Header;
