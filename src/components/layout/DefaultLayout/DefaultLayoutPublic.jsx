
import React from 'react'

import Header from '../../Header/Header';

function DefaultLayoutPublic({ children }) {
    return (

        <div className='public_layout'>
            <Header />
            <div>
                {children}
            </div>
        </div>
    );
}

export default DefaultLayoutPublic;