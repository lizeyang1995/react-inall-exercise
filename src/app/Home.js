import React from 'react';
import './home.less';
import calculator from  '../images/calculator.png';
import timer from  '../images/timer.png';

const Home = () => {
  return (
    <div className="home">
      <section className='shutter'>
        <h1>在线实用工具</h1>
      </section>
      <section className='features'>
        <div>
          <img src={calculator} alt='calculator'></img>
          <h1>计算器</h1>
        </div>
        <div>
          <img className='timer' src={timer} alt='timer'></img>
          <h1>倒计时器</h1>
        </div>
      </section>
    </div>
  );
};

export default Home;