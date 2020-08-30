import React, { Component } from 'react';

import PropTypes from 'prop-types';
import TodoList from '../taskList';
import Footer from '../footer';
import './main.css';
class Main extends Component {
  
  render() {
    return (
      <section className='main'>
        <TodoList todos = {this.props.todos} done = {this.props.done} onDeleted = {this.props.onDeleted} onToggleDone = {this.props.onToggleDone}  changeItem = {this.props.changeItem} onSubmit={this.props.onSubmit} />
        <Footer doneCount={this.props.doneCount} todoCount={this.props.todoCount} removeCompletedItem={this.props.removeCompletedItem}/>
      </section>
    )
  }

}

Main.defaultProps = {
  onDeleted : () => {},
  onToggleDone : () => {},
  removeCompletedItem : () => {}
}

Main.propTypes = {
  todos: PropTypes.array,
  done: PropTypes.number,
  onDeleted : PropTypes.func,
  onToggleDone : PropTypes.func,
  doneCount: PropTypes.number,
  todoCount: PropTypes.number,
  removeCompletedItem: PropTypes.func
}
export default Main;