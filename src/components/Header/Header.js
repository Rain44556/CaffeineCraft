import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [changeHeader,setChangeHeader] = useState(false);
    
    const changeHeaderColor = () =>{
        if (window.scrollY >= 50){
            setChangeHeader(true)
        } else{
            setChangeHeader(false)
        }
    }

window.addEventListener('scroll', changeHeaderColor)

    return (
        <header className= {`header ${changeHeader && "scroll-header"}`} id='header'>
            <nav className='nav-bar container'>
                <a href="#home" className='logo'><span>Caffeine</span>Craft</a>

<div className="menu" id='menu'>
<ul className='lists'>
    <li><a href="#home" className='navbar-link active-link'></a>Home</li>
    <li><a href="#items" className='navbar-link'></a>Items</li>
    <li><a href="#spot" className='navbar-link'></a>Spot</li>
    <li><a href="#site" className='navbar-link'></a>Site</li>
</ul>


</div>

<div className='toggle' id='toggle'>
    <i className='bx bx-grid-alt'></i>
</div>
</nav>
</header>


    );
};

export default Header;