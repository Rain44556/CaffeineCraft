import React from 'react';
import { Fade } from 'react-reveal';
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
                <section className='star-content' id='home' style={{backgroundImage: `url(./images/coffee-bg.jpg)`}}>
                  <Fade top>
                  <h1>Relax in a comfortable spot and start your day<br/> with
             your favourite cup of coffee.</h1>
                    <button onClick={Order}>Order</button>
                  </Fade>
                </section>
            </main>
        </div>
    );
};

export default StarSection;