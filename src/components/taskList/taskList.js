import React, { Component } from 'react';
import Task from '../task';
import './taskList.css';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import { parseWithOptions } from 'date-fns/fp';
import TaskListItem from '../taskListItem';

class TodoList extends Component {
  render() {
    
    const elements = this.props.todos.map(el => {
      return (
        <TaskListItem className={el.className} done = {el.done} stateTask={el.text} key={el.id} date= {el.date} onDeleted = {this.props.onDeleted} onToggleDone = {() => this.props.onToggleDone(el.id)} changeItem = { () => this.props.changeItem(el.id)} editing={el.editing} onSubmit={(e) => this.props.onSubmit(el.id,e)}  onChangeHandler= {(e) => this.props.onChangeHandler(el.id,e)}/>
      )
    })
    return (
      <ul className='todo-list' >
        {elements}
      </ul>
    )
  }

}
TodoList.defaultProps = {
  todos: [],
  onToggleDone: () => {},
  onChangeHandler: () => {},
  onSubmit: () => {},
  changeItem: () => {}
}
TodoList.propTypes = {
  todos: PropTypes.array,
  onToggleDone: PropTypes.func,
  onChangeHandler: PropTypes.func,
  onSubmit: PropTypes.func,
  changeItem: PropTypes.func
}
export default TodoList;