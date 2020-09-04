import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterList from '../taskFilter';
import './footer.css';

class Footer extends Component {
  render() {
    const { todoCount, doneCount, handlerAll, handlerActive, handlerDone, removeCompletedItem } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">
          {todoCount} left, {doneCount} done
        </span>
        <FilterList handlerAll={handlerAll} handlerActive={handlerActive} handlerDone={handlerDone}/>
        <button type="button" className="clear-completed" onClick={removeCompletedItem}>
          Clear completed
        </button>
      </footer>
    );
  }
}

Footer.defaultProps = {
  removeCompletedItem: () => {},
  doneCount: 0,
  todoCount: 0,
};
Footer.propTypes = {
  removeCompletedItem: PropTypes.func,
  doneCount: PropTypes.number,
  todoCount: PropTypes.number,
  handlerAll: PropTypes.func,
  handlerActive: PropTypes.func,
  handlerDone: PropTypes.func,
};
export default Footer;
