import React, {Component} from 'react'
import {Link} from "react-router-dom";
import './Timer.less';

class Timer extends Component {
  state = {
    start: 'Start',
    time: ''
  }

  handleChange = () => {

  }

  setTime = (event) => {
    this.setState({
      time: event.target.value
    })
  }

  render() {
    return (
      <main className='timer-box'>
        <h1>在线倒计时器</h1>
        <section className='timer-body'>
          <section className='set-time'>
            <span>设置时间</span>
            <input name='set-time' onChange={this.setTime}></input>
            <button>Start</button>
          </section>
          <section className='second'>
            <input name='show-time' onChange={this.handleChange} value={this.state.start}></input>
          </section>
        </section>
        <div className='back-home'>
          <Link to='/'>回到主页</Link>
        </div>
      </main>
    )
  }
}
export default Timer;
