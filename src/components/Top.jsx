import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { api, api_image } from '../API/api';
import Slider from 'react-slick';
import imgDN from '../assets/danang.jpg';
import { StarFilled } from "@ant-design/icons";
import Destination1 from "../assets/hero-img1.png";
import Destination2 from "../assets/hero-img2.png";
import Destination3 from "../assets/hero-img3.png";
import Destination4 from "../assets/hero-img2.png";
import Destination5 from "../assets/hero-img1.png";
import Destination6 from "../assets/hero-img3.png";
import { useNavigate } from 'react-router';

import { useTranslation } from 'react-i18next';
export default function Top() {
  const [category, setCategory] = useState();
  const {t} = useTranslation()
  const [isRequestAPI, setIsRequestAPI] = useState(false);
  const [categoryId, setCategoryId] = useState(1)
  const [blog, setBlog] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const URL = api + `api/blogByCate?category_id=${categoryId}`
    axios.get(URL)
      .then(
        res => {
          console.log(res.data)
          setBlog(res.data)
        }
      )
  }, [categoryId])

  const data = [
    {
      id: 1,
      image: Destination1,
      name: "Singapore",
      address: "abc, Trần Cao Vân, Đà Nẵng",
      description: "Singapore, officialy thr Republic of Singapore, is a",
      rating: 1,
    },
    {
      id: 1,
      image: Destination2,
      name: "Thailand",
      address: "abc, Trần Cao Vân, Đà Nẵng",
      description: "Thailand is a Southeast Asia country. It's known for",
      rating: 2,
    },
    {
      id: 2,
      image: Destination3,
      name: "Paris",
      address: "abc, Trần Cao Vân, Đà Nẵng",
      description:
        "Paris, France's capital, is a major European city and a",
      rating: 3,
    },
    {
      id: 3,
      image: Destination4,
      name: "New Zealand",
      address: "abc, Trần Cao Vân, Đà Nẵng",
      description: "New Zealand is an island country in the",
      rating: 2,
    },
    {
      id: 4,
      image: Destination5,
      name: "Bora Coffee",
      address: "abc, Trần Cao Vân, Đà Nẵng",
      description:
        "Bora Bora is a small South Pacific island northwest of",
      rating: 5,
    },
    {
      id: 5,
      image: Destination6,
      name: "London Coffee",
      address: "abc, Trần Cao Vân, Đà Nẵng",
      description:
        " London, the capital of England and the UnitedLondon, the capital of England and the UnitedLondon, the capital of England and the UnitedLondon, the capital of England and the United",
      rating: 3,
    },
  ];

  const renderRating = (rating) => {
    return (
      <ul className='rating-list'>
        {[...Array(rating).keys()].map((item) => (
          <li className='rating-item'>
            <StarFilled
              style={{ fontSize: "14px", color: "#DA6938" }}
            />
          </li>
        ))}
      </ul>
    );
  };
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
    <section>

      <section className='section-top'>
        <div className='container'>
          <h2 className='txt-title txt-center mb-5'>Categories</h2>
          <div className='destination-list'>
            <Slider {...settings}>
              {category?.map((item) => {
                return (
                  <div className='destination-item'
                    onClick={
                      () => {
                        console.log(item.id)
                        setCategoryId(item.id)
                      }
                    }
                  >
                    <div className='destination-image'>
                      <img
                        src={
                          (item.image !== null ?? item.image !== "") ? ((item.image.includes('http')) ? item.image : api_image + item.image) : imgDN
                        }
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

      <section className='section-plan' style={{ backgroundColor: "#fff" }}>
        <div className='container'>
          <h2 className='txt-title txt-center mb-5'>Top destinations</h2>
          <div className='plan-wrapper'>
            <ul className='plan-list row'>
              {blog?.data?.map((item) => {
                return (
                  <li className='plan-item col-3'
                  style={{cursor: "pointer"}}
                    onClick={() => {
                      navigate(`/blog/${item.id}`);
                    }}
                  >
                    <div className='card'>
                      <div className='card-image'>
                        <a>
                          <img
                            src={
                              (item.image !== '' ?? item.image !== null) ? ((item.image.includes('http')) ? item.image : api_image + item.image) : imgDN
                            }
                            alt={item.name}
                          />
                        </a>
                      </div>
                      <div className='card-content'>
                        {renderRating(item.rating)}
                        <h4 className='card-name'>
                          <h1>
                            {item.name}
                          </h1>
                        </h4>
                        <p className='card-address'>
                          {item.address}
                        </p>
                        <p className='card-desc'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}
