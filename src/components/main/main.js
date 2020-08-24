import React, { Component } from 'react';

import TodoList from '../taskList';
import Footer from '../footer';
import './main.css';
class Main extends Component {
  render() {
    return (
      <section className='main'>
        <TodoList todos = {this.props.todos} onDeleted = {this.props.onDeleted} />
        <Footer />
      </section>
    )
  }

}

export default Main;