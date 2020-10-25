import React from 'react';
import './Backdrop.scss';

function Backdrop({
    isOpen = false,
    closeFunction = () => {}
}) {
    if(isOpen) {
        return <div onClick={closeFunction} className="backdrop"></div>
    }

    return null;
}

export default Backdrop;