import React from 'react';

import PropTypes from 'prop-types';
import TodoList from '../taskList';
import Footer from '../footer';
import './main.css';

function Main({
	todos,
	onDeleted,
	onToggleDone,
	changeItem,
	onSubmit,
	onChangeHandler,
	doneCount,
	todoCount,
	removeCompletedItem,
	filter,
	changeFilter,
}) {
	return (
		<section className="main">
			<TodoList
				todos={todos}
				onDeleted={onDeleted}
				onToggleDone={onToggleDone}
				changeItem={changeItem}
				onSubmit={onSubmit}
				filter={filter}
				onChangeHandler={onChangeHandler}
			/>
			<Footer
				doneCount={doneCount}
				todoCount={todoCount}
				removeCompletedItem={removeCompletedItem}
				filter={filter}
				changeFilter={changeFilter}
			/>
		</section>
	);
}

Main.defaultProps = {
	onDeleted: () => {},
	onToggleDone: () => {},
	removeCompletedItem: () => {},
	onChangeHandler: () => {},
	onSubmit: () => {},
	changeItem: () => {},
	filter: 'all',
	changeFilter: () => {},
};

Main.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			date: PropTypes.string.isRequired,
			editing: PropTypes.bool.isRequired,
			isChecked: PropTypes.bool.isRequired,
		})
	).isRequired,
	onDeleted: PropTypes.func,
	onToggleDone: PropTypes.func,
	doneCount: PropTypes.number.isRequired,
	todoCount: PropTypes.number.isRequired,
	removeCompletedItem: PropTypes.func,
	onChangeHandler: PropTypes.func,
	onSubmit: PropTypes.func,
	changeItem: PropTypes.func,
	filter: PropTypes.string,
	changeFilter: PropTypes.func,
};
export default Main;
