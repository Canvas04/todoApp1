import React, { Component } from 'react';
import Task from '../task';
import './taskList.css';
import { formatDistanceToNow } from 'date-fns';
import { parseWithOptions } from 'date-fns/fp';
import TaskListItem from '../taskListItem';

class TodoList extends Component {
  render() {
    
    const elements = this.props.todos.map(el => {
      return (
        <TaskListItem className={el.className} done = {el.done} stateTask={el.text} key={el.id} date= {el.date} onDeleted = {this.props.onDeleted}/>
      )
    })
    return (
      <ul className='todo-list' >
        {elements}
      </ul>
    )
  }

}
export default TodoList;