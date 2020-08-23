import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Footer from './components/footer'
import Header from './components/header';
import TodoList from './components/taskList';
import Main from './components/main';
import { formatDistanceToNow } from 'date-fns';

class App extends Component {

  state = {
    data: [
      { id: 1, text: 'Completed Task', important: false, done: false, date: formatDistanceToNow(new Date()) ,className:'completed'},
      { id: 2, text: 'Editing Task', important: false, done: false, date: formatDistanceToNow(new Date()) , className:'editing'},
      { id: 3, text: 'Active Task', important: false, done: false, date: formatDistanceToNow(new Date()) },
    ]
  }


  render() {
    return (
      <section className='todoApp'>
        <Header />
        <Main todos = {this.state.data}/>
      </section>
    )

  }

}

ReactDOM.render(<App />, document.querySelector('#root'))