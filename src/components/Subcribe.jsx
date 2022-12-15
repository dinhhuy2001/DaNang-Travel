import React from 'react';
import img1 from '../assets/subs.png';

export default function Subcribe() {
  return (
    <section className='section-subcribe'>
      <div className='container'>
        <div className='subcribe-wrapper'>
          <div className='subcribe-image'>
            <img src={img1} alt='subcribeImage'/>
          </div>
          <div className='subcribe-content'>
            <h3 className="txt-title txt-center">Get special offers, and more from Traveler</h3>
            <p className="txt-center">
              Subscribe to see secret deals prices drop the moment you sign up!
            </p>
            <div className='subcribe-form'>
              <input className="subcribe-form-input" type='text' placeholder='Email address' />
              <button className="btn btn-primary subcribe-btn">Subcribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
