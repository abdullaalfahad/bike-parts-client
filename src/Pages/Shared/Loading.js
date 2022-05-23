import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center' style={{ height: '80vh' }}>
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            </svg>
            Processing...
        </div>
    );
};

export default Loading;