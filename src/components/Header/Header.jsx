import React from 'react';
import header from './Header.module.css';
import Bigfish from './Bigfish/Bigfish';
import Topfon from './Topfon/Topfon';


const Header = () => {
    return (
    <header className={header.header}>
        <Bigfish/>
        <Topfon />
        
    </header>
    )
}

export default Header;