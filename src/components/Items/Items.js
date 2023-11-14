import React from 'react';
import './Items.css';
const Items = () => {
    return (
        <div>
            <section>
                <div>
                <h3>Locate appetising cuisine and<br/>
                    select your favourites.</h3>
                <ul className="items-filter">
                    <li className='items-product items-line active-item' data-filter='.'>
                <h4>Main Menu</h4>
                <span>3products</span>
                    </li>
                </ul>
                
                
                </div>
            </section>
        </div>
    );
};

export default Items;