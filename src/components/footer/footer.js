import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterList from '../taskFilter';
import './footer.css';

class Footer extends Component {
    state = {
        countTask: ''
    }

    normalState = () => {
        this.setState(() => {
            return {
                countTask: ''
            }
        })
    }

    handlerDone = () => {
        this.setState(() => {
            const {doneCount} = this.props
            return {
                countTask: doneCount
            }

        })
        setTimeout(this.normalState,5000);
    }

    handlerActive = () => {
        this.setState(() => {
            const {todoCount} = this.props
            return {
                countTask: todoCount
            }

        })
        setTimeout(this.normalState,5000);
    }

handlerAll = () => {
    this.setState(() => {
        const {todoCount,doneCount} = this.props;
        return {
            countTask: todoCount + doneCount,
        }

    });
    setTimeout(this.normalState,5000);
}

    render() {
        const {todoCount,doneCount,removeCompletedItem} = this.props;
        const {countTask} = this.state;
        return (
            <footer className='footer'>
                <span className='todo-count'>{todoCount} left, {doneCount} done</span>
                <span className='tab-count'>{countTask}</span>
                <FilterList todoCount={todoCount} doneCount={doneCount} onHandlerDone={this.handlerDone} onHandlerActive = {this.handlerActive} onHandlerAll = {this.handlerAll}/>
                <button type='button' className='clear-completed' onClick={removeCompletedItem}>Clear completed</button>
            </footer>

        )
    }

}

Footer.defaultProps = {
    removeCompletedItem: () => {},
    doneCount: 0,
    todoCount: 0,
   
}
Footer.propTypes = {
    removeCompletedItem: PropTypes.func,
    doneCount: PropTypes.number,
    todoCount: PropTypes.number
}
export default Footer;