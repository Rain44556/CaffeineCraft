import React from 'react';


const Header = () => {
    return (
        <header className='header' id='header'>
            <nav className='nav-bar'>
                <a href="#home" className='logo'><span>Caffeine</span>Craft</a>

<div className="menu" id='menu'>
<ul className='lists'>
    <li className='item'><a href="#home" className='navbar-link active-link'></a>Home</li>
    <li className='item'><a href="#items" className='navbar-link'></a>Items</li>
    <li className='item'><a href="#spot" className='navbar-link'></a>Spot</li>
    <li className='item'><a href="#site" className='navbar-link'></a>Site</li>
</ul>

<div className='close' id='close'>
    <i className='bx bx-x'></i>
</div>
</div>

<div className='toggle' id='toggle'>
    <i className='bx bx-grid-alt'></i>
</div>
</nav>
</header>


    );
};

export default Header;