import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <ReactLoading type='bubbles' color='#196bea' width={64} height={64} />
        </div>
    );
};

export default Loading;