import React from 'react';
import './UniqueCatagory.css';
const UniqueCatagory = () => {
    return (
        <div>
            <section className='unique section container' id='unique'>
                <div className='unique-container'>
                    <div className='unique-box'>
                        <h3>Finest coffees that lift your spirits and make you happy!</h3>
                    </div>

<div className='unique-catagory'>


    <div className='unique-coffees'>
    <div className='coffee'>
    <img src="./images/cappccino-coffee.jpg" alt="" />
    </div>
    <h2>Cappuccino</h2>
    </div>

    <div className='unique-coffees'>
    <div className='coffee'>
    <img src="./images/americano-hot-coffee.jpg" alt="" />
    </div>
    <h2>Americano</h2>
    </div>

    <div className='unique-coffees'>
    <div className='coffee'>
    <img src="./images/ristretto-coffee.jpg" alt="" />
    </div>
    <h2>Ristretto</h2>
    </div>
   

    <div className='unique-coffees'>
    <div className='coffee'>
    <img src="./images/Latte coffee.jpg" alt="" />
    </div>
    <h2>Latte</h2>
    </div>

    <div className='unique-coffees'>
    <div className='coffee'>
    <img src="./images/mocha-coffee.jpg" alt="" />
    </div>
    <h2>Mocha</h2>
    </div>

                </div>
                </div>
            </section>
        </div>
    );
};

export default UniqueCatagory;