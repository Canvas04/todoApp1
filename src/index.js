import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { formatDistanceToNow } from 'date-fns';
import { array } from 'prop-types';
import { getByTestId } from '@testing-library/react';
import Footer from './components/footer'
import Header from './components/header';
import TodoList from './components/taskList';
import Main from './components/main';

class App extends Component {

  idItem = 100;

  date = new Date();

  state = {
    data: [
      this.createTodoItem('Completed task'),
      this.createTodoItem('Editing Task'),
      this.createTodoItem('Active Task')
    ]
  }

  createTodoItem(text) {
    return {
      id: this.idItem++,
      text,
      time: new Date(),
      date: formatDistanceToNow(this.date, { includeSeconds: true }),
      done: false,
      editing: false,
    }
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
    const newObj = this.createTodoItem(text)

    this.setState(({ data }) => {
      const newArr = [...data, newObj];
      return {
        data: newArr
      }
    })
  }

  onToggleDone = (id,e) => {
    e.preventDefault();
    console.log(e)
    this.setState(({ data }) => {

      const idx = data.findIndex(el => el.id === id);
      const oldItem = data[idx];
      const newItem = { ...oldItem, done: !oldItem.done };
      const newArray = [
        ...data.slice(0, idx),
        newItem,
        ...data.slice(idx + 1)
      ];
      return {
        data: newArray
      }
    })

  }

  removeCompletedItem = (id) => {
    this.setState(({ data }) => {
      const doneIdArr = []
      data.filter(el => el.done).forEach(el => {
        const { id } = el;
        doneIdArr.push(id)
      })
      const resArr = data.filter(item => !doneIdArr.includes(item.id));
      return {
        data: resArr
      }
    })
  }

  changeItem = (id) => {
    this.setState(({ data }) => {
      const idx = data.findIndex(el => el.id == id);
      const oldItem = data[idx];
      const newItem = { ...oldItem, editing: !oldItem.editing };
      const newArray = [
        ...data.slice(0, idx),
        newItem,
        ...data.slice(idx + 1)
      ];
      console.log(newArray)
      return {
        data: newArray
      };
    })
}
  
onChangeHandler = (id,e) => {
  e.persist()
  this.setState(({data}) => {
    
    const idx = data.findIndex(el => el.id === id);
    const oldItem = data[idx];
    const newItem = { ...oldItem, text: e.target.value,date: formatDistanceToNow(this.date, { includeSeconds: true }) };
    const newArray = [
      ...data.slice(0, idx),
      newItem,
      ...data.slice(idx + 1)
    ];
    return {
      data: newArray
    }
  })
  
}

onSubmit = (id,e) => {
  e.preventDefault();
  this.setState(({ data }) => {
    const idx = data.findIndex(el => el.id == id);
    const oldItem = data[idx];
    const newItem = { ...oldItem, editing: !oldItem.editing };
    const newArray = [
      ...data.slice(0, idx),
      newItem,
      ...data.slice(idx + 1)
    ];
    console.log(newArray)
    return {
      data: newArray
    };
  })
   
}

  render() {

    const doneCount = this.state.data.filter(el => el.done).length;
    const todoCount = this.state.data.length - doneCount;
    const allCount = this.state.data.length;

    return (
      <section className='todoApp'>
        <Header addItem={this.addItem} changeItem={this.changeItem} />
        <Main todos={this.state.data} done={this.state.data.done} doneCount={doneCount} todoCount={todoCount} onDeleted={this.removeItem} onToggleDone={this.onToggleDone} removeCompletedItem={this.removeCompletedItem} changeItem={this.changeItem} onChangeHandler={this.onChangeHandler} onSubmit={this.onSubmit} />
      </section>
    )

  }

}

ReactDOM.render(<App />, document.querySelector('#root'));

