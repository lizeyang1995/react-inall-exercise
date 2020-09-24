import React from 'react';
import './home.less';
import calculator from  '../images/calculator.png';
import timer from  '../images/timer.png';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <section className='shutter'>
        <h1>在线实用工具</h1>
      </section>
      <section className='features'>
        <div>
          <img src={calculator} alt='calculator'></img>
          <div className='calculator-link'>
            <Link to='/calculator'>计算器</Link>
          </div>
        </div>
        <div>
          <img className='timer' src={timer} alt='timer'></img>
          <div className='timer-link'>
            <Link to='/timer'>计算器</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;