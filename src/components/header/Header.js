import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.less';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <p>
          <Link to='/'>HOME</Link>
        </p>
        <p>
          <Link to='/'>在线计算器</Link>
        </p>
        <p>
          <Link to='/'>在线倒计时器</Link>
        </p>
      </div>
    );
  }
}
export default Header;
