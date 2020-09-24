import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Calculator.less';

class Calculator extends Component {
  render() {
    return (
      <div className='calculator'>
        <h1>在线计算器</h1>
        <div className='calculator-box'>
          <div className='input'>
            <input></input>
          </div>
          <div className='calculator-body'>
            <div className='operation'>
              <button>+</button>
              <button>-</button>
              <button>x</button>
            </div>
            <div className='number'>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>7</button>
              <button>8</button>
              <button>9</button>
              <button>0</button>
              <button className='clear'>Clear</button>
              <button className='equal'>=</button>
            </div>
          </div>
        </div>
        <div className='back-home'>
          <Link to='/'>回到主页</Link>
        </div>
      </div>
    )
  }
}
export default Calculator;
