import React, { useState } from 'react';
import data from '../../json/data.json';
import './Items.css';


const Items = () => {

    const [filter, setFilter] = useState('main-menu');
    return (
        <div>
            <section className='items section' id="items">
                <div className='items-container container'>
                <h1>Locate appetising cuisine and<br/>
                    select your favourites</h1>
    
    <ul className="items-filter">
    <li className='item items-line active-item' 
    onClick={() => setFilter('main-menu')}
     data-filter='.delicacies'>
        <h4>Main Menu</h4>
    </li>

    <li className='item items-line' 
    onClick={() => setFilter('deserts')}
     data-filter =".desert">
        <h4> Deserts </h4>
    </li>

    <li className='item' 
    onClick={() => setFilter('drinks')}
    data-filter=".drinks">
        <h4>Drinks</h4>  
    </li>
</ul>


<div className="items-content grid">
    {data.catagories.map((catagory,index) =>{
        return(
         catagory.catagory === filter && (
            <article className='items-card main-menu'>
            <div className='items-shape'>
                <img src={catagory.imageUrl} alt="" className='items-img'/>
            </div>
            <div className="items-data">
                <h2>Tk. {catagory.price}</h2>
                <h3>{catagory.title}</h3>
                <button className='button btn-items'>
                    <i className='bx bx-shopping-bag'></i>
                </button>

            </div>
        </article>
         )
        )
    })}
</div>
                </div>
            </section>
        </div>
    );
};

export default Items;