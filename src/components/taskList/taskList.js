import React from 'react';
import './taskList.css';
import PropTypes from 'prop-types';
import TaskListItem from '../taskListItem';

function TodoList ({todos,onDeleted,onToggleDone,changeItem,onSubmit,onChangeHandler}) {
  
    
    const elements = todos.map(el => {
      return (
        <TaskListItem className={el.className} done = {el.done} stateTask={el.text} key={el.id} date= {el.date} onDeleted = {() => onDeleted(el.id)} onToggleDone = {(e) => onToggleDone(el.id,e)} changeItem = { () => changeItem(el.id)} editing={el.editing} onSubmit={(e) => onSubmit(el.id,e)}  onChangeHandler= {(e) => onChangeHandler(el.id,e)}/>
      )
    })
    return (
      <ul className='todo-list' >
        {elements}
      </ul>
    )
  

}
TodoList.defaultProps = {
  
  onToggleDone: () => {},
  onChangeHandler: () => {},
  onSubmit: () => {},
  changeItem: () => {},
  onDeleted: () => {}
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onToggleDone: PropTypes.func,
  onChangeHandler: PropTypes.func,
  onSubmit: PropTypes.func,
  changeItem: PropTypes.func,
  onDeleted: PropTypes.func
}
export default TodoList;