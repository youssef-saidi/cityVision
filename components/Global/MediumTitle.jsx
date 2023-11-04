import React from 'react';

const MediumTitle = ({title}) => {
    return (
        <h1 className='text-sm md:text-base font-bold   text-left py-1'>{title}</h1>
    );
}

export default MediumTitle;