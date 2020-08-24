import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Footer from './components/footer'
import Header from './components/header';
import TodoList from './components/taskList';
import Main from './components/main';
import { formatDistanceToNow } from 'date-fns';

class App extends Component {
  idItem = 100;
  state = {
    data: [
      { id: 1, text: 'Completed Task', important: false, done: false, date: formatDistanceToNow(new Date()), className: 'completed' },
      { id: 2, text: 'Editing Task', important: false, done: false, date: formatDistanceToNow(new Date()) },
      { id: 3, text: 'Active Task', important: false, done: false, date: formatDistanceToNow(new Date()) },
    ]
  }
  removeItem = (id) => {
    this.setState(({ data }) => {
      const idx = data.filter(el => el.id);
      data.splice(idx, 1)
      const before = data.slice(0, idx);
      const after = data.slice(idx + 1);
      const resArr = [...before, ...after]
      return {
        data: resArr
      }
    })
  }
  addItem = (text) => {
    const newObj = {
      id: this.idItem++,
      text: text,
      date: formatDistanceToNow(new Date())
    }

    this.setState(({ data }) => {
      const newArr = [...data, newObj];
      return {
        data: newArr
  }
    })
  }
  onToggleDone = (id) => {
console.log('Done', id)
  }
  render() {
    return (
      <section className='todoApp'>
        <Header addItem = {this.addItem}/>
        <Main todos={this.state.data} onDeleted={this.removeItem} onToggleDone={this.onToggleDone} />
      </section>
    )

  }

}

ReactDOM.render(<App />, document.querySelector('#root'))