import React, { useState } from 'react';
import data from '../../json/data.json';
import {Fade} from 'react-reveal'
import './Items.css';


const Items = () => {

    const [filter, setFilter] = useState('main-menu');
    return (
        <div>
            <section className='items' id="items">
                <div className='items-container'>
              <Fade Right delay={495}>
                <h1>Locate appetising cuisine and<br/>
                    select your favourites</h1>
                </Fade>

    <ul className="items-filter">
        <Fade Right delay={700}>
    <li className={`item items-line ${filter === 'main-menu' && 'active-item'}`} 
    onClick={() => setFilter('main-menu')}
     data-filter='.delicacies'>
        <h4>Main Menu</h4>
    </li>

    <li className= {`item items-line ${filter === 'deserts' && 'active-item'}`} 
    onClick={() => setFilter('deserts')}
     data-filter =".desert">
        <h4> Deserts </h4>
    </li>

    <li className= {`item items-line ${filter === 'drinks' && 'active-item'}`}
    onClick={() => setFilter('drinks')}
    data-filter=".drinks">
        <h4>Drinks</h4>  
    </li>
    </Fade>
</ul>


<div className="items-content">
    {data.catagories.map((catagory,index) =>{
        return(
         catagory.catagory === filter && (
            <Fade key={index} bottom delay={100*index}>
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
            </Fade>
           
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