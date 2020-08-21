import React from 'react';
import Task from '../task';
import './taskList.css';
import { formatDistanceToNow} from 'date-fns';

const TodoList = () => {
  return (
    <ul className='todo-list' >
      <li className='completed'>
        <Task state='Completed' date={formatDistanceToNow(new Date())} />
      </li>

      <li className='editing'>
        <Task state='Completed ' date={formatDistanceToNow(new Date())} />
        <input type='text' className='edit' value='Editing task' />
      </li>
      <li>
        <Task state=' Active ' date={formatDistanceToNow(new Date())} />
      </li>
    </ul>
  )
}
export default TodoList;