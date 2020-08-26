import React, { Component } from 'react';
import FilterList from '../taskFilter';
import PropTypes from 'prop-types';
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
            return {
                countTask: this.props.doneCount
            }

        })
        setTimeout(this.normalState,5000);
    }

    handlerActive = () => {
        this.setState(() => {
            return {
                countTask: this.props.todoCount
            }

        })
        setTimeout(this.normalState,5000);
    }
handlerAll = () => {
    this.setState(() => {
        return {
            countTask: this.props.todoCount + this.props.doneCount
        }

    });
    setTimeout(this.normalState,5000);
}

    render() {
        return (
            <footer className='footer'>
                <span className='todo-count'>{this.props.todoCount} left, {this.props.doneCount} done</span>
                <span className='tab-count'>{this.state.countTask}</span>
                <FilterList todoCount={this.props.todoCount} doneCount={this.props.doneCount} onHandlerDone={this.handlerDone} onHandlerActive = {this.handlerActive} onHandlerAll = {this.handlerAll}/>
                <button className='clear-completed' onClick={this.props.removeCompletedItem}>Clear completed</button>
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