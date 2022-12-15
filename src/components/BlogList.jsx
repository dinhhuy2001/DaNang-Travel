import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { api, api_image } from "../API/api";
import Destination1 from "../assets/Destination1.png";
import img1 from "../assets/Long.png";
import imgDN from '../assets/danang.jpg';


export default function BlogList() {
  const [category, setCategory] = useState()
  const [categoryId, setCategoryId] = useState(1)
  const [blog, setBlog] = useState([])
  const [search, setSearch]= useState("")
  const [populars, setPopulars]= useState([])
  const navigate = useNavigate()
  useEffect(() => {
    const URL = api + "api/category"
    axios.get(URL)
      .then(
        res => {
          console.log(res.data)
          setCategory(res.data)
        }
      )
  }, [])

  useEffect(() => {
    const URL = api + "api/blog"
    axios.get(URL)
      .then(
        res => {
          console.log(res.data)
          setPopulars(res.data)
        }
      )
  }, [])

  useEffect(() => {
    const URL = api + `api/blogByCateFull?category_id=${categoryId}`
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
      image: Destination1,
      title: "A Seaside Reset in Laguna Beach",
      subTitle: "From the iconic to the unexpected, the city of San Francisco never ceases to surprise. Kick-start your effortlessly delivered Northern California holiday in the cosmopolitan hills of The City . Join your Travel Director and fellow travellers for a Welcome Reception at your hotel.",
      avatar: img1,
      author: "Quoc Long",
      date: "April 6, 2022 10:20 am",
    },
    {
      image: Destination1,
      title: "A Seaside Reset in Laguna Beach",
      subTitle: "From the iconic to the unexpected, the city of San Francisco never ceases to surprise. Kick-start your effortlessly delivered Northern California holiday in the cosmopolitan hills of The City . Join your Travel Director and fellow travellers for a Welcome Reception at your hotel.",
      avatar: img1,
      author: "Quoc Long",
      date: "April 6, 2022 10:20 am",
    },
    {
      image: Destination1,
      title: "A Seaside Reset in Laguna Beach",
      subTitle: "From the iconic to the unexpected, the city of San Francisco never ceases to surprise. Kick-start your effortlessly delivered Northern California holiday in the cosmopolitan hills of The City . Join your Travel Director and fellow travellers for a Welcome Reception at your hotel.",
      avatar: img1,
      author: "Quoc Long",
      date: "April 6, 2022 10:20 am",
    },
  ];
  const popular = [
    {
      image: Destination1,
      title: "Meet the Steve Jobs of the Travel Industry",
      subTitle: "May 6, 2022",
    },
    {
      image: Destination1,
      title: "Meet the Steve Jobs of the Travel Industry",
      subTitle: "May 6, 2022",
    },
    {
      image: Destination1,
      title: "Meet the Steve Jobs of the Travel Industry",
      subTitle: "May 6, 2022",
    }
  ]

  const categories = [
    {
      name: "BOOKING",
      number: "2",
    },
    {
      name: "HOTEL",
      number: "2",
    },
    {
      name: "STAYS",
      number: "2",
    },
    {
      name: "TRAVEL",
      number: "2",
    }
  ]
  const tags = ["Content", "Offers", "Promotion", "SEO", "Social media"]

  const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
      <ul class="breadcrumb">
        <li><a href="/home">Home</a></li>
        <li>Blog</li>
      </ul>

      <div className="posts">
        {blog
        ?.filter(val=>{
          if(search===""){return val}
          else if(val.name.toLowerCase().includes(search.toLocaleLowerCase())){
            return val
          }
        })
        ?.map((post) => {
          return (
            <div className="post" style={{ cursor: "pointer" }}
              onClick={() => {
                navigate(`/blog/${post.id}`);
              }}
            >
              <img src={
                // api_image+post.image
                (post?.image !== null ?? post?.image !== "") ? ((post?.image?.includes('http')) ? post?.image : api_image + post?.image) : imgDN
              } alt="" />
              <div class="tag">Coffee</div>
              <h3>{post.name}</h3>
              <p>{post.description}</p>
              <div className="info">
                <img src={
                  // post.avatar == null ? img1: api_image+ post.avatar
                  // (post.image !== ''  ?? post.image !== null) ? ( ( post.image.includes('http')) ?  post.image:api_image + post.image ) : imgDN

                  (post.user?.avatar !== null ?? post.user?.avatar !== "") ? ((post.user?.avatar?.includes('http')) ? post.user?.avatar : api_image + post.user?.avatar) : img1
                } alt="" />
                <span>BY</span><h3>{post.author}</h3>
                <span>{new Date(post.updated_at).toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="sidebar">
        <div className="card">
          <h3>Search</h3>
          <form >
            <input type="text" placeholder="Search.."
              onChange={(e)=>{
                setSearch(e.target.value)
              }}
            name="search" />
            <button type="submit"><i class="fa fa-search"></i></button>
          </form>
        </div>
        <div className="card">
          <h3>Categories</h3>
          {category?.map((item) => {
            return (
              <div style={{ cursor: "pointer" }} className="cat-item"
                onClick={
                  () => {
                    console.log(item.id)
                    setCategoryId(item.id)
                  }
                }
              >
                <div className="item-name">
                  <h4>{item.name}</h4>
                </div>

                <h4>{item.number}</h4>
              </div>
            );
          })}

        </div>
        <div className="card">
          <h3>Popular posts</h3>
          {populars?.map((post) => {
            return (
              <div className="post"
                onClick={() => {
                  navigate(`/blog/${post.id}`);
                }}
              >
                <div class="post-image">
                  <img src={post.image} alt="" />
                </div>
                <div class="post-content">
                  <h4>{post.name}</h4>
                  <p>{new Date(post.updated_at).toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
              </div>
            );
          })}

        </div>
        {/* <div className="card">
          <h3>Tags</h3>
          <div className="tags">
          {tags.map((item) => {
            return (
              <div className="tag">
                {item}
              </div>
          );})}
          </div>
        </div> */}
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: grid;
  grid-template-areas:
    'header header header'
    'main main right';
  background-color: white;
  .breadcrumb {
    margin-bottom: 50px;
    grid-area: header;
    padding: 10px 16px;
    list-style: none;
    background-color: white;
    border: 1px solid #DEDEDE;
    li {
      display: inline;
      font-size: 18px;
      a {
        color: #0275d8;
        text-decoration: none;
      }
      a:hover {
        color: #01447e;
        text-decoration: underline;
      }
    }
    li + li:before {
      padding: 8px;
      color: black;
      content: "/\\00a0";
    }
   
  }
  
  .sidebar {
    grid-area: right;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 0 3rem;
    .card {
      max-width: 400px;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #F7F8FA;
      border-radius: 1rem;
      border: 1px solid #DEDEDE;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      h3 {
        border-bottom: 1px solid #DEDEDE;
      }
      form {
        input {
          border-radius: 80px;
          height: 50px;
          width: 100%;
          font-size: 16px;
          background-color: white;
          border: 1px solid #DEDEDE;
          padding-inline-start: 16px;
        }
        button {
          height: 40px;
          width: 40px;
          border-radius: 50px;
          margin-left: -50px;
          background-color: #3B71FE;
          color: white;
          border: 1px solid black;
        }
      }
      .post {
        display:flex;
        .post-image {
          padding-right: 20px;
          img {
            width:100px;
            height: 100px;
          }
        }
        .post-content {
          margin-left: auto;
          display:flex;
          height: 100px;
          flex-direction: column;
          justify-content: space-between;
        }
      }
      .cat-item {
        background-color: white;
        border: 1px solid #DEDEDE;
        height: 50px;
        border-radius: 1rem;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        align-items :center;
        padding-inline: 20px; 
        .item-name {
          display: flex;
          border-radius: 30px;
          height: 30px;
          width: 100px;
          align-items :center;
          justify-content: center;
          background-color: rgba(136, 7, 53, 0.06);
          color: #880735;
        }
      }
      .tags {
        display: flex;
        flex-wrap: wrap;
      .tag {
        margin-right: 10px;
        margin-bottom: 10px;
        background-color: white;
        border: 1px solid #DEDEDE;
        height: 40px;
        border-radius: 1rem;
        align-items :center;
        justify-content: center;
        display: grid;
        width: max-content;
        padding-inline: 10px; 
      }
    }
    }
      
  }
  .posts {
    grid-area: main;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 0 3rem;
    .post {
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
      .tag {
        margin-left: 50px;
        width: max-content;
        padding-inline: 10px;
        border-radius: 30px;
        border: 1px solid #3B71FE;
        color: #3B71FE;
      }
      h3, p {
        padding-inline:20px;
      }
      .info {
        display: flex;
        align-items: center;
        padding: 20px;

        img {
          margin-right: 10px;
          border-radius: 50%;
          height: 100px;
          width: 100px;
        }
        h3 {
          margin-right: 10px;
          margin-left: 5px;
        }
      }

    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .info {
      img {
        width: 50px;
        height: 50px;
      }
    }

  }
`;
