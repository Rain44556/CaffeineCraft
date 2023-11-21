import React from 'react';
import data from '../../json/data.json';
import './Items.css';


const Items = () => {
    return (
        <div>
            <section className='items section' id="items">
                <div className='items_container container'>
                <h3>Locate appetising cuisine and<br/>
                    select your favourites.</h3>
    
<ul className="items-filter">
    <li className='item items-line active-item' data-filter='.delicacies'>
        <h4>Main Menu</h4>
        <span>3 items</span>
    </li>
    
    <li className='item items-line' data-filter =".coffee">
        <h4> Coffee</h4>
        <span>4 items</span>
    </li>

    <li className='item' data-filter=".cake">
        <h4>Desserts</h4>  
        <span>4 items</span>
    </li>
</ul>
                
<div className="items-content grid">
    {data.catagories.map((catagory,index) =>{
        return(
            <article className='items-card main-menu'>
                <div className='items-shape'>
                    <img src={catagory.imageUrl} alt="" className='items-img'/>
                </div>
                <div className="items-data">
                    <h2>${catagory.price}</h2>
                    <h3>{catagory.title}</h3>
                    <button className='button btn-items'>
                        <i className='bx bx-shopping-bag'></i>
                    </button>

                </div>
            </article>
        )
    })}
</div>
                </div>
            </section>
        </div>
    );
};

export default Items;