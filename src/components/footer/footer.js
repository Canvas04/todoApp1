import React from 'react';
import PropTypes from 'prop-types';
import FilterList from '../taskFilter';
import './footer.css';

function Footer({ todoCount, doneCount, removeCompletedItem, filter, changeFilter }) {
	return (
		<footer className="footer">
			<span className="todo-count">
				{todoCount} left, {doneCount} done
			</span>
			<FilterList filter={filter} changeFilter={changeFilter} />
			<button type="button" className="clear-completed" onClick={removeCompletedItem}>
				Clear completed
			</button>
		</footer>
	);
}

Footer.defaultProps = {
	removeCompletedItem: () => {},
	doneCount: 0,
	todoCount: 0,
	changeFilter: () => {},
};
Footer.propTypes = {
	removeCompletedItem: PropTypes.func,
	doneCount: PropTypes.number,
	todoCount: PropTypes.number,
	filter: PropTypes.string.isRequired,
	changeFilter: PropTypes.func,
};
export default Footer;
