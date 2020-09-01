import React, { Component } from 'react';
import './task.css';
import PropTypes, { bool } from 'prop-types';

class Task extends Component {


  render() {
    let classNames = 'description';
    if (this.props.done) {
      classNames += ' completed-task';
    }

    let editingElem;
    if (this.props.editing) {
      editingElem = (
        <label><input className={classNames} onChange={this.props.onChangeHandler} defaultValue={this.props.stateTask} />{' '}
          <span className='created'>{this.props.date} created ago</span>
        </label>
      )
    } else {
      editingElem = (
        <label>
          <span className={classNames} onClick={this.props.onToggleDone}>{this.props.stateTask}</span>{' '}
          <span className='created'>{this.props.date} created ago</span>
        </label>
      )
    }
    return (
      <div className='view'>
        <input className='toggle' type='checkbox' />
        <form onSubmit={this.props.onSubmit}>
          {editingElem}
        </form>
        <button className='icon icon-edit' onClick={this.props.changeItem}  />
        <button className='icon icon-destroy ' onClick={this.props.onDeleted} />
      </div>
    )
  }

}

Task.defaultProps = {
  done: false,
  onToggleDone: () => { },
  stateTask: '',
  date: '',
  onDeleted: () => { },
  onChangeHandler: () => { },
  onSubmit: () => { },
  changeItem: () => { },
  editing: false
}
Task.propTypes = {
  done: PropTypes.bool,
  onToggleDone: PropTypes.func,
  stateTask: PropTypes.string,
  date: PropTypes.string,
  onDeleted: PropTypes.func,
  onChangeHandler: PropTypes.func,
  onSubmit: PropTypes.func,
  changeItem: PropTypes.func,
  editing: PropTypes.bool
}
export default Task;