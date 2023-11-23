import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
          <footer className="footer">
            <div className='footer-details'>
                <h3 className='subtitle'>Address</h3>
                <p className='information'>
                    Gec,khulsi town <br />road no.30
                </p>
           

           <div className='footer-content'>
           <div className="footer-details">
                <h3 className="subtitle">Contact</h3>
                <p className='information'>Caffeinecraft@email.com <br />
                01776452478 </p>
           </div>

           <div className="footer-details">
                <h3 className="subtitle">Office</h3>
                <p className='information'> Monday-Friday <br /> 8am-9pm </p>
           </div>

            <div className="footer-details">
                 <p className='newsletter-details'> Subscribe 
                 Our Newsletter</p>
            <div className='newsletter'>
            <input type="email"
            placeholder='Email Adress'
            className='footer-input' />
            <button className='btn-footer'>
                <i className='bx bx-right-arrow-alt'></i>
            </button>
            </div>
            </div>
          </div>

          <div className='footer-group'>
            <ul className='footer-social'>
                <a href="#" target="_blank" className='social-link'>
                    <i className='bx bxl-linkedin'></i>
                </a>
                <a href="#" target="_blank" className='social-link'>
                    <i className='bx bxl-facebook'></i>
                </a>
            </ul>

<span> All rights reserved </span>

          </div>
          </div>
        </footer>
        </div>
    );
};

export default Footer;