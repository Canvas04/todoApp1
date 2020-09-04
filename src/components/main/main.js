import React from 'react';

import PropTypes from 'prop-types';
import TodoList from '../taskList';
import Footer from '../footer';
import './main.css';

function Main({todos,onDeleted,onToggleDone,changeItem,onSubmit,handlerAll,handlerActive,handlerDone,onChangeHandler,doneCount,todoCount,removeCompletedItem}) {
  return (
      <section className='main'>
        <TodoList todos = {todos}  onDeleted = {onDeleted} onToggleDone = {onToggleDone}  changeItem = {changeItem} onSubmit={onSubmit} onChangeHandler= {onChangeHandler} />
        <Footer doneCount={doneCount} handlerAll = {handlerAll} handlerActive={handlerActive} handlerDone={handlerDone} todoCount={todoCount} removeCompletedItem={removeCompletedItem}/>
      </section>
    )
  }

Main.defaultProps = {
  onDeleted : () => {},
  onToggleDone : () => {},
  removeCompletedItem : () => {},
  onChangeHandler: () => {},
  onSubmit: () => {},
  changeItem: () => {},
  
}

Main.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,date:PropTypes.string.isRequired,editing: PropTypes.bool.isRequired})).isRequired,
  onDeleted : PropTypes.func,
  onToggleDone : PropTypes.func,
  doneCount: PropTypes.number.isRequired,
  todoCount: PropTypes.number.isRequired,
  handlerAll: PropTypes.func,
  handlerActive: PropTypes.func,
  handlerDone: PropTypes.func,
  removeCompletedItem: PropTypes.func,
  onChangeHandler: PropTypes.func,
  onSubmit: PropTypes.func,
  changeItem: PropTypes.func
}
export default Main;