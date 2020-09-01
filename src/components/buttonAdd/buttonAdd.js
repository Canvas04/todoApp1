
 
/*eslint-disable */
import React  from 'react';
/* eslint-enable */
import PropTypes from 'prop-types';

export default function ButtonAdd({onSubmit}) {

        return  (
            <button type="button" className='btn btn-info' onClick={onSubmit}>Add item</button>
        )
    
}
ButtonAdd.defaultProps = {
    onSubmit : () => {}
}
ButtonAdd.propTypes = {
    onSubmit : PropTypes.func
}