import React from 'react';
import PropTypes from 'prop-types';

import Button from 'src/widget/buttons/button';

const RemoveButton = (props) => {
    return (
        <Button
            emphasis='tertiary'
            onClick={() => props.remove(props.issueId)}
        >
            {props.list === 'out' ? '취소' : '거절'}
        </Button>
    );
};

RemoveButton.propTypes = {
    issueId: PropTypes.string.isRequired,
    remove: PropTypes.func.isRequired,
    list: PropTypes.string,
};

RemoveButton.defaultProps = {
    list: 'my',
};

export default RemoveButton;
