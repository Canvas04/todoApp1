
 
/*eslint-disable */
import React  from 'react';
/* eslint-enable */
import PropTypes from 'prop-types';

export default function ButtonAdd({addItem}) {

        return  (
            <button type="button" className='btn btn-info' onClick={addItem}>Add item</button>
        )
    
}
ButtonAdd.defaultProps = {
    addItem : () => {}
}
ButtonAdd.propTypes = {
    addItem : PropTypes.func
}