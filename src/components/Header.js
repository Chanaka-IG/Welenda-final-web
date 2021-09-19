import React from 'react';

import Button from './Button';

const Header = () => {
    return(
        <div className='headerContainer'>
            <div className='headerCpntainer_actions'>
                <Button title="Message" type="action"/>
                <Button title="Suggestion" type='action'/>
            </div>
            <h1 className='headerContainer_title'>
                Admin Panel <br/> of
            </h1>
            <div className='headerContainer_logout'>
                <Button title="Logout" type="logout"/>
            </div>
        </div>
    );
};

export default Header;