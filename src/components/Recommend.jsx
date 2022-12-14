import React, { useState } from 'react';
import { StarFilled } from '@ant-design/icons';
import Destination1 from '../assets/hero-img1.png';
import Destination2 from '../assets/hero-img2.png';
import Destination3 from '../assets/hero-img3.png';
import Destination4 from '../assets/hero-img2.png';
import Destination5 from '../assets/hero-img1.png';
import Destination6 from '../assets/hero-img3.png';

export default function Recommend() {
  const data = [
    {
      id: 1,
      image: Destination1,
      name: 'Singapore',
      address: 'abc, Trần Cao Vân, Đà Nẵng',
      description: 'Singapore, officialy thr Republic of Singapore, is a',
      rating: 1,
    },
    {
      id: 1,
      image: Destination2,
      name: 'Thailand',
      address: 'abc, Trần Cao Vân, Đà Nẵng',
      description: "Thailand is a Southeast Asia country. It's known for",
      rating: 2,
    },
    {
      id: 2,
      image: Destination3,
      name: 'Paris',
      address: 'abc, Trần Cao Vân, Đà Nẵng',
      description: "Paris, France's capital, is a major European city and a",
      rating: 3,
    },
    {
      id: 3,
      image: Destination4,
      name: 'New Zealand',
      address: 'abc, Trần Cao Vân, Đà Nẵng',
      description: 'New Zealand is an island country in the',
      rating: 2,
    },
    {
      id: 4,
      image: Destination5,
      name: 'Bora Coffee',
      address: 'abc, Trần Cao Vân, Đà Nẵng',
      description: 'Bora Bora is a small South Pacific island northwest of',
      rating: 5,
    },
    {
      id: 5,
      image: Destination6,
      name: 'London Coffee',
      address: 'abc, Trần Cao Vân, Đà Nẵng',
      description: ' London, the capital of England and the UnitedLondon, the capital of England and the UnitedLondon, the capital of England and the UnitedLondon, the capital of England and the United',
      rating: 3,
    },
  ];

  const renderRating = (rating) => {
    return (
      <ul className='rating-list'>
        {[...Array(rating).keys()].map((item) => (
          <li className='rating-item'>
            <StarFilled style={{ fontSize: '14px', color: '#DA6938' }}/>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section className='section-plan'>
      <div className='container'>
        <div className='plan-wrapper'>
          <h2 className='txt-title txt-center mb-5'>Plan your outing</h2>
          <ul className='plan-list row'>
            {data.map((item) => {
              return (
                <li className='plan-item col-3'>
                  <div className='card'>
                    <div className='card-image'>
                      <a href={item.id}>
                        <img src={item.image} alt={item.name} />
                      </a>
                    </div>
                    <div className='card-content'>
                      {renderRating(item.rating)}
                      <h4 className='card-name'>
                        <a href={item.id}>{item.name}</a>
                      </h4>
                      <p className='card-address'>{item.address}</p>
                      <p className='card-desc'>{item.description}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
