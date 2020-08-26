import React, { Component } from 'react';

import TodoList from '../taskList';
import Footer from '../footer';
import './main.css';
class Main extends Component {
  
  render() {
    return (
      <section className='main'>
        <TodoList todos = {this.props.todos} done = {this.props.done} onDeleted = {this.props.onDeleted} onToggleDone = {this.props.onToggleDone} />
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
export default Main;