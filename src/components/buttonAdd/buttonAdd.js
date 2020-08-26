import React , {Component} from 'react';
import PropTypes from 'prop-types';

export default class ButtonAdd extends Component {

    render () {
        return  (
            <button className='btn btn-info' onClick={this.props.onSubmit}>Add item</button>
        )
    }
}
ButtonAdd.defaultProps = {
    onSubmit : () => {}
}
ButtonAdd.propTypes = {
    onSubmit : PropTypes.func
}