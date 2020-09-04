import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { formatDistanceToNow } from 'date-fns';
import Header from './components/header';
import Main from './components/main';

class App extends Component {
  idItem = 100;

  date = new Date();

  state = {
    data: [
      this.createTodoItem('Completed task'),
      this.createTodoItem('Editing Task'),
      this.createTodoItem('Active Task'),
    ],
  };

  removeItem = () => {
    this.setState(({ data }) => {
      const idx = data.filter((el) => el.id);
      data.splice(idx, 1);
      const before = data.slice(0, idx);
      const after = data.slice(idx + 1);
      const resArr = [...before, ...after];
      return {
        data: resArr,
      };
    });
  };

  addItem = (text) => {
    const newObj = this.createTodoItem(text);
    this.setState(({ data }) => {
      newObj.date = formatDistanceToNow(new Date(), { includeSeconds: true });
      const newArr = [...data, newObj];
      const newTime = data.map((el) => {
        el.date = formatDistanceToNow(this.date, { includeSeconds: true });
      });
      return {
        data: newArr,
      };
    });
  };

  onToggleDone = (id, e) => {
    e.preventDefault();
    this.setState(({ data }) => {
      const idx = data.findIndex((el) => el.id === id);
      const oldItem = data[idx];
      const newItem = { ...oldItem, done: !oldItem.done };
      const newArray = [...data.slice(0, idx), newItem, ...data.slice(idx + 1)];
      return {
        data: newArray,
      };
    });
  };

  removeCompletedItem = (id) => {
    this.setState(({ data }) => {
      const doneIdArr = [];
      data
        .filter((el) => el.done)
        .forEach((el) => {
          const { idEl } = el;
          doneIdArr.push(idEl);
        });
      const resArr = data.filter((item) => !doneIdArr.includes(item[id]));
      return {
        data: resArr,
      };
    });
  };

  changeItem = (id) => {
    this.setState(({ data }) => {
      const idx = data.findIndex((el) => el.id === id);
      const oldItem = data[idx];
      const newItem = { ...oldItem, editing: !oldItem.editing };
      const newArray = [...data.slice(0, idx), newItem, ...data.slice(idx + 1)];
      return {
        data: newArray,
      };
    });
  };

  onChangeHandler = (id, e) => {
    e.persist();
    this.setState(({ data }) => {
      const idx = data.findIndex((el) => el.id === id);
      const oldItem = data[idx];
      const newItem = { ...oldItem, text: e.target.value };
      const newArray = [...data.slice(0, idx), newItem, ...data.slice(idx + 1)];
      return {
        data: newArray,
      };
    });
  };

  onSubmit = (id, e) => {
    e.preventDefault();
    this.setState(({ data }) => {
      const idx = data.findIndex((el) => el.id === id);
      const oldItem = data[idx];
      const newItem = {
        ...oldItem,
        editing: !oldItem.editing,
        date: formatDistanceToNow(new Date(), { includeSeconds: true }),
      };
      const newArray = [...data.slice(0, idx), newItem, ...data.slice(idx + 1)];
      return {
        data: newArray,
      };
    });
  };

  createTodoItem(text) {
    return {
      id: this.idItem++,
      text,
      time: new Date(),
      date: formatDistanceToNow(new Date(), { includeSeconds: true }),
      done: false,
      editing: false,
    };
  }

  render() {
    const { data } = this.state;
    const doneCount = data.filter((el) => el.done).length;
    const todoCount = data.length - doneCount;

    return (
      <section className="todo-app">
        <Header addItem={this.addItem} changeItem={this.changeItem} />
        <Main
          todos={data}
          done={data.done}
          doneCount={doneCount}
          todoCount={todoCount}
          onDeleted={this.removeItem}
          onToggleDone={this.onToggleDone}
          removeCompletedItem={this.removeCompletedItem}
          changeItem={this.changeItem}
          onChangeHandler={this.onChangeHandler}
          onSubmit={this.onSubmit}
        />
      </section>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
