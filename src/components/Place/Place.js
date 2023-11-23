import React, { useState } from 'react';
import data from '../../json/data.json';
import './Place.css';


const Place = () => {

    const [imageSelect, setImageSelect] = useState(data.places[0].imageUrl);

    return (
        <div>
         <section className='place' id='place'>
         <div className='place-container'>
         <h3>bring you comfort With our cosy services!</h3>
           
         <div className='place-content'>

         <div className='img-place'>
         <img src={imageSelect} className='img-place-big'/>

         <div className='img-place-smalls'>
            {data.places.map((place,index) =>{
        return <img key={index}
        src={place.imageUrl}
        alt=''
        onClick={() => setImageSelect(place.imageUrl)}
        className= {`img-place-small ${imageSelect === place.imageUrl && 'active'}`}/>
        })}

        </div>
        </div>


    <div className='place-details'>
        <h2 className='title'>Locate a location that you admire</h2>
        <p className='description'>We offer the ideal environment, complete with lovely decor and 
        <br /> positive energy, for continued productivity and focus</p>
    </div>

    </div>
        </div>
            </section>
        </div>
    );
};

export default Place;