import React from 'react';
import './StarSection.css';
const StarSection = () => {

    const Order = () =>{
    window.scrollTo({
    top: 1150,
    behavior: 'smooth'
        })
            }

    return (
        <div>
            <main className='main' id='main'>
                <section className='star section' id='home' style={{backgroundImage: `url(./images/coffee-bg.jpg)`}}>
                    <h1>Relax in a comfortable spot and start your day<br/> with
             your favourite cup of coffee.</h1>
                    <button onClick={Order}>Order</button>
                </section>
            </main>
        </div>
    );
};

export default StarSection;