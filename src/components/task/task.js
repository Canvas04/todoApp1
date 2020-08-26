import React, { Component } from 'react';
import './task.css';
import PropTypes from 'prop-types';

class Task extends Component {
  
  render() {
    let classNames = 'description';
    if (this.props.done) {
      classNames += ' completed-task';
    }
    return (
      <div className='view'>
        <input className='toggle' type='checkbox' />
        <label>
          <span className={classNames} onClick={this.props.onToggleDone}>{this.props.stateTask}</span>{' '}
          <span className='created'>{this.props.date} created ago</span>
        </label>
        <button className='icon icon-edit'></button>
        <button className='icon icon-destroy ' onClick={this.props.onDeleted}></button>
      </div>
    )
  }

}

Task.defaultProps = {
  done: false,
  onToggleDone: () => {},
  stateTask: '',
  date: '',
  onDeleted: () => {}
}
Task.propTypes = {
  done: PropTypes.bool,
  onToggleDone: PropTypes.func,
  stateTask: PropTypes.string,
  date: PropTypes.string,
  onDeleted: PropTypes.func
}
export default Task;