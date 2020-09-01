import React, {Component} from 'react';
import Task from '../task';
import './taskListItem.css';
import PropTypes from 'prop-types';

export default class TaskListItem extends 
Component {

    render() {
       
        return (
            <li className={this.props.className}>
                <Task stateTask = {this.props.stateTask} date={this.props.date} onDeleted = {this.props.onDeleted} onToggleDone = {this.props.onToggleDone} done={this.props.done} changeItem = {this.props.changeItem} editing={this.props.editing} onSubmit={this.props.onSubmit} onChangeHandler= {this.props.onChangeHandler}/>
            </li>
        )
    }
}

TaskListItem.defaultProps = {
    className: '',
    stateTask: '',
    date: '',
    onDeleted: () => {},
    onToggleDone: () => {},
    done: false,
    onChangeHandler: () => {},
  onSubmit: () => {},
  changeItem: () => {}
}
TaskListItem.propTypes = {
    className: PropTypes.string,
    stateTask: PropTypes.string,
    date: PropTypes.string,
    onDeleted: PropTypes.func,
    onToggleDone: PropTypes.func,
    done: PropTypes.bool,
    onChangeHandler: PropTypes.func,
    onSubmit: PropTypes.func,
    changeItem: PropTypes.func
}