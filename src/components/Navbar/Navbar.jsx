import React from 'react';
import navbar from './Navbar.module.css';


const Navbar = () => {
    return (
    <nav className={navbar.nav}>
        <div>
          <div>
            Сезон
          </div>
          <div>
            2020г
          </div>
          <div>
            2019г
          </div>
          <div>
            2018г
          </div>
          <div>
            2017г
          </div>
          <div>
            2016г
          </div>
        </div>
    </nav>
    )
}

export default Navbar;