import React, {Component} from 'react'
import {Link} from "react-router-dom";
import './Timer.less';

class Timer extends Component {
  state = {
    startOrEnd: 'Start',
    totalTime: '',
    remainingTime: '',
    isDisable: ''
  }

  handleChange = () => {

  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  setTime = (event) => {
    this.setState({
      totalTime: parseInt(event.target.value)
    })
  }

  countdown = () => {
    let currentTime = this.state.totalTime;
    this.setState({
      startOrEnd: '',
      remainingTime: currentTime,
      isDisable: true
    })
    this.interval = setInterval(() => {
      if (currentTime >= 1) {
        this.setState({
          remainingTime: --currentTime
        })
      } else {
        this.setState({
          startOrEnd: 'End',
          isDisable: ''
        })
        clearInterval(this.interval);
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
            <button className={this.state.isDisable ? 'disableStyle' : 'button'} onClick={this.countdown} disabled={this.state.isDisable}>Start</button>
          </section>
          <section className='second'>
            <input name='show-time' onChange={this.handleChange} value={this.state.startOrEnd || this.state.remainingTime}></input>
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
