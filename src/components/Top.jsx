import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { api, api_image } from '../API/api';
import Slider from 'react-slick';
import imgDN from '../assets/danang.jpg';
import { useTranslation } from 'react-i18next';
export default function Top() {
  const [category, setCategory] = useState();
  const {t} = useTranslation()
  const [isRequestAPI, setIsRequestAPI] = useState(false);
  const settings = {
    speed: 200,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }
    ]
  };

  const getListCategory = () => {
    if (!isRequestAPI) {
      const URL = api + 'api/category';
      setIsRequestAPI(true);
      axios
        .get(URL)
        .then((res) => {
          setCategory(res.data);
          setIsRequestAPI(false);
        })
        .catch((err) => {
          setIsRequestAPI(false);
        });
    }
  };

  useEffect(() => {
    getListCategory();
  }, []);

  return (
    <section className='section-top'>
      <div className='container'>
        <h2 className='txt-title txt-center mb-5'>{t('home.top_destination')}</h2>
        <div className='destination-list'>
          <Slider {...settings}>
            {category?.map((item) => {
              return (
                <div className='destination-item'>
                  <div className='destination-image'>
                    <img
                      src={item.image !== '' ? api_image + item.image : imgDN}
                      alt=''
                    />
                  </div>
                  <h3 className='destination-title'>{item.name}</h3>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
