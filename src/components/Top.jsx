import React, { useEffect, useState } from "react";
import styled from "styled-components";
import img1 from "../assets/cafe.jpg";
import img2 from "../assets/restaurant.jpg";
import img3 from "../assets/hotel.jpeg";
import img4 from "../assets/market.jpg";
import img5 from "../assets/bar.jpg";
import img6 from "../assets/pub.jpg";
import imgDN from "../assets/danang.jpg";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import axios from "axios";
import { api, api_image } from "../API/api";
import { ConsoleSqlOutlined } from "@ant-design/icons";

export default function Top() {
  const [category, setCategory] = useState()
  const [categoryId, setCategoryId] = useState(1)
  const [blog, setBlog] = useState([])
  useEffect(()=>{
    const URL = api + "api/category"
    axios.get(URL)
    .then(
      res => {
        console.log(res.data)
        setCategory(res.data)
      }
    )
  },[])

  useEffect(()=>{
    const URL = api + `api/blogByCate?category_id=${categoryId}`
    axios.get(URL)
    .then(
      res => {
        console.log(res.data)
        setBlog(res.data)
      }
    )
  },[categoryId])
  // const data = [
  //   {
  //     icon: img1,
  //     title: "Caffee",
  //   },
  //   {
  //     icon: img2,
  //     title: "Restaurant",
  //     subTitle:
  //       "4 Location",
  //   },
  //   {
  //     icon: img3,
  //     title: "Hotel",
  //   },
  //   {
  //     icon: img4,
  //     title: "Supermarket",
  //   },
  //   {
  //     icon: img5,
  //     title: "Bar",
  //   },
  //   {
  //     icon: img6,
  //     title: "Pub",
  //   },
  // ];
  const data = [
    {
      image: Destination1,
      title: "Singapore",
      subTitle: "Singapore, officialy thr Republic of Singapore, is a",
      cost: "38,800",
    },
    {
      image: Destination2,
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asia country. It's known for",
      cost: "54,200",
    },
    {
      image: Destination3,
      title: "Paris",
      subTitle: "Paris, France's capital, is a major European city and a",
      cost: "45,500",
    },
    {
      image: Destination4,
      title: "New Zealand",
      subTitle: "New Zealand is an island country in the",
      cost: "24,100",
    },
    {
      image: Destination5,
      title: "Bora Bora",
      subTitle: "Bora Bora is a small South Pacific island northwest of",
      cost: "95,400",
    },
    {
      image: Destination6,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "38,800",
    },
  ];
  return (
    <Section id="top">
      <div id="title" style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2>Destination Category</h2>
      </div>
      <div className="destinations">
        {category?.map((service, index) => {
          return (

            <div className="destination" style={{cursor: "pointer"}} 
            onClick={
              ()=>{
                console.log(service.id)
                setCategoryId(service.id)
              }
              }>
              <div className="icon">
                <img src={service.image !== "" ? api_image+service.image:imgDN} alt="" />
              </div>
              <h3>{service.name}</h3>
            </div>
          );
        })}
      </div>
      <div className="destinations2">
        {blog.data?.map((item) => {
          return (
            <div key={item.id} className="destination">
              <img src={item.image !==null? api_image+item.image:Destination2} alt="" />
              <h3>{item.name}</h3>
              <p>{item.subTitle}</p>
              <div className="info">
                <div className="services">
                  <div className="card">5/5</div>
                  <h3>Excellent</h3>
                </div>
                <span>(3 review)</span>
              </div>
              <div className="distance">
                <span>Price</span>
                <h4>{item.cost}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1rem;
    margin: 2rem 0;
    .destination {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 2rem 0;
      background-color: aliceblue;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      text-align: center;
      font-size: 15px;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .icon {
        img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
        }
      }
    }
  }
  .destinations2 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #fffff;
      border-radius: 1rem;
      border: 1px solid #DEDEDE;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
   
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          .card {
            padding: 0 1rem;
            border-radius: 0.5rem;
            border: 1px solid #3B71FE;
            color: #3B71FE;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    .destinations {
      grid-template-columns: 1fr;
    }
    .destinations2 {
      grid-template-columns: 1fr;
    }
  }
`;
