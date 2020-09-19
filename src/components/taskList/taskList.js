import React from 'react';
import './taskList.css';
import PropTypes from 'prop-types';
import TaskListItem from '../taskListItem';

function TodoList({ todos, filter, onDeleted, onToggleDone, changeItem, onSubmit, onChangeHandler }) {
	let filteredData;
	if (filter === 'all') filteredData = todos;
	if (filter === 'active') filteredData = todos.filter((el) => !el.done);
	if (filter === 'completed') filteredData = todos.filter((el) => el.done);

	const elements = filteredData.map((el) => {
		return (
			<TaskListItem
				className={el.className}
				done={el.done}
				stateTask={el.text}
				key={el.id}
				date={el.date}
				isChecked={el.isChecked}
				onDeleted={() => onDeleted(el.id)}
				onToggleDone={(e) => onToggleDone(el.id, e)}
				changeItem={(e) => {
					changeItem(el.id,e);
				}}
				editing={el.editing}
				onSubmit={(e) => onSubmit(el.id, e)}
				onChangeHandler={(e) => onChangeHandler(el.id, e)}
			/>
		);
	});
	return <ul className="todo-list">{elements}</ul>;
}
TodoList.defaultProps = {
	onToggleDone: () => {},
	onChangeHandler: () => {},
	onSubmit: () => {},
	changeItem: () => {},
	onDeleted: () => {},
	filter: 'all',
};
TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	onToggleDone: PropTypes.func,
	onChangeHandler: PropTypes.func,
	onSubmit: PropTypes.func,
	changeItem: PropTypes.func,
	onDeleted: PropTypes.func,
	filter: PropTypes.string,
};
export default TodoList;
