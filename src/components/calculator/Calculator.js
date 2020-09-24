import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Calculator.less';

class Calculator extends Component {
  state = {
    numberOne:'',
    numberTwo:'',
    operation:'',
    equal:'',
    result:''
  }

  handleCalculate = (event) => {
    const value = parseInt(event.target.name);
    if (value >= 0 && value <= 9) {
      if (this.state.numberOne === '') {
        this.setState({
          numberOne:value
        })
      } else {
        this.setState({
          numberTwo:value
        })
      }
    } else {
      this.setState({
        operation: event.target.name
      })
    }
  }

  handleChange = (event) => {

  }

  handleEqual = (event) => {
    if (this.state.operation === '+') {
      this.setState({
        equal: '=',
        result: parseInt(this.state.numberOne) + parseInt(this.state.numberTwo)
      })
    } else if (this.state.operation === '-') {
      this.setState({
        equal: '=',
        result: parseInt(this.state.numberOne) - parseInt(this.state.numberTwo)
      })
    } else {
      this.setState({
        equal: '=',
        result: parseInt(this.state.numberOne) * parseInt(this.state.numberTwo)
      })
    }
  }

  handleClear = (event) => {
    this.setState({
      numberOne:'',
      numberTwo:'',
      operation:'',
      equal:'',
      result:''
    })
  }

  render() {
    return (
      <div className='calculator'>
        <h1>在线计算器</h1>
        <div className='calculator-box'>
          <div className='input'>
            <input onChange={this.handleChange} value={`${this.state.numberOne} ${this.state.operation} ${this.state.numberTwo} ${this.state.equal} ${this.state.result}`}></input>
          </div>
          <div className='calculator-body'>
            <div className='operation'>
              <button name='+' onClick={this.handleCalculate}>+</button>
              <button name='-' onClick={this.handleCalculate}>-</button>
              <button name='x' onClick={this.handleCalculate}>x</button>
            </div>
            <div className='number'>
              <button name='1' onClick={this.handleCalculate}>1</button>
              <button name='2' onClick={this.handleCalculate}>2</button>
              <button name='3' onClick={this.handleCalculate}>3</button>
              <button name='4' onClick={this.handleCalculate}>4</button>
              <button name='5' onClick={this.handleCalculate}>5</button>
              <button name='6' onClick={this.handleCalculate}>6</button>
              <button name='7' onClick={this.handleCalculate}>7</button>
              <button name='8' onClick={this.handleCalculate}>8</button>
              <button name='9' onClick={this.handleCalculate}>9</button>
              <button name='0' onClick={this.handleCalculate}>0</button>
              <button className='clear' name='clear' onClick={this.handleClear}>Clear</button>
              <button className='equal' name='=' onClick={this.handleEqual}>=</button>
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
