import React from 'react';
import data from '../../json/data.json';
import './Items.css';


const Items = () => {
    return (
        <div>
            <section className='items section' id="items">
                <div className='items-container container'>
                <h1>Locate appetising cuisine and<br/>
                    select your favourites</h1>
    
    <div className="items-filter">
        <h4 className='item items-line active-item' data-filter='.delicacies'>Our Menu Card</h4>
    </div> 


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