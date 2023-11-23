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
    <li><a href="#place" className='navbar-link'>Place</a></li>
    <li><a href="#items" className='navbar-link'>Items</a></li>
    <li><a href="#home" className='navbar-link active-link'>Home</a></li>
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