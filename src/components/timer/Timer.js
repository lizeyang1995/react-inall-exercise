import React, {Component} from 'react'
import {Link} from "react-router-dom";
import './Timer.less';

class Timer extends Component {
  state = {
    startOrEnd: 'Start',
    time: '',
    startCountdown: false
  }

  handleChange = () => {

  }

  setTime = (event) => {
    this.setState({
      time: event.target.value
    })
  }

  countdown = () => {
    this.setState({
      startCountdown: true,
      startOrEnd: ''
    })
    let interval = setInterval(() => {
      let currentTime = this.state.time;
      if (currentTime >= 1) {
        this.setState({
          time: currentTime - 1
        })
      } else {
        clearInterval(interval);
        this.setState({
          startOrEnd: 'End',
          startCountdown: false
        })
      }
    }, 1000)
  }

  render() {
    return (
      <main className='timer-box'>
        <h1>在线倒计时器</h1>
        <section className='timer-body'>
          <section className='set-time'>
            <span>设置时间</span>
            <input name='set-time' onChange={this.setTime}></input>
            <button onClick={this.countdown}>Start</button>
          </section>
          <section className='second'>
            <input name='show-time' onChange={this.handleChange} value={this.state.startOrEnd || this.state.time}></input>
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
