import React from 'react';
import './Loading.scss';

function Loading() {
    return (
        <div className="loader">
            <div className='loader__container'>
                <h1 className='page-header'>Loading</h1>
                <div className="loader__container-spinner"></div>
            </div>

        </div>
    );
}

export default Loading;