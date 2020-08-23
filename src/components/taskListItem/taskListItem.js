import React, {Component} from 'react';
import Task from '../task';
export default class TaskListItem extends 
Component {

    render() {
        return (
            <li className={this.props.className}>
                <Task stateTask = {this.props.stateTask} date={this.props.date}/>
            </li>
        )
    }
}