import React, { Component } from 'react';
import './task.css';


class Task extends Component {
  state = {
    done: false
  }
  overLine = () => {
    this.setState(state => {
      return {
        done: !state.done
      }
    })
  }
  render() {
    let classNames = 'description';
    if (this.state.done) {
      classNames += ' completed-task';
    }
    return (
      <div className='view'>
        <input className='toggle' type='checkbox' />
        <label>
          <span className={classNames} onClick={this.overLine}>{this.props.stateTask}</span>{' '}
          <span className='created'>{this.props.date} created</span>
        </label>
        <button className='icon icon-edit'></button>
        <button className='icon icon-destroy ' onClick={this.props.onDeleted}></button>
      </div>
    )
  }

}

export default Task;