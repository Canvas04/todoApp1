import React from 'react';
import PropTypes from 'prop-types';
import Task from '../task';
import './taskListItem.css';


export default function TaskListItem ({className,stateTask,date,onDeleted,onToggleDone,done,changeItem,editing,onSubmit,onChangeHandler})  {

    return (
            <li className={className}>
                <Task stateTask = {stateTask} date={date} onDeleted = {onDeleted} onToggleDone = {onToggleDone} done={done} changeItem = {changeItem} editing={editing} onSubmit={onSubmit} onChangeHandler= {onChangeHandler}/>
            </li>
        )
    
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
    changeItem: () => {},
    editing: false
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
    changeItem: PropTypes.func,
    editing: PropTypes.bool
}