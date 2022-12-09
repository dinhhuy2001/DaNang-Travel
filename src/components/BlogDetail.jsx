import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "../assets/Destination1.png";
import img1 from "../assets/Long.png";
import img2 from "../assets/Huy.png";


export default function BlogDetail() {
	const post =
	{
		image: Destination1,
		rating: 3,
		title: "A Seaside Reset in Laguna Beach",
		body: "From the iconic to the unexpected, the city of San Francisco never ceases to surprise. Kick-start your effortlessly delivered Northern California holiday in the cosmopolitan hills of The City . Join your Travel Director and fellow travellers for a Welcome Reception at your hotel.",
		avatar: img1,
		author: "Quoc Long",
		date: "April 6, 2022 10:20 am",
	}
	const comment = {
		avatar: img2,
		author: "Truong Huy",
		date: "Dec 11, 2022 10:20 am",
		content: "Hi, this is a comment."
	}
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
			<ul className="breadcrumb">
				<li><a href="/home">Home</a></li>
				<li>A Seaside Reset in Laguna Beach</li>
			</ul>

			<div className="posts">
				<div className="post">
					<img src={post.image} alt="" />
					<div className="tag">Coffee</div>
					<div className="star-rating">
						{[...Array(5)].map((star, index) => {
							index += 1;
							return (
								<button type="button" key={index} className={index <= post.rating ? "on" : "off"}>
									<span className="star" >&#9733;</span>
								</button>
							);
						})}
					</div>
					<h3>{post.title}</h3>
					<div className="info">
						<img src={post.avatar} alt="" />
						<span>BY</span><h3>{post.author}</h3>
						<span>{post.date}</span>
					</div>
					<p>{post.body}</p>
					<p>{post.body}</p>
					<p>{post.body}</p>
				</div>
				<div className="pagination">
					<div className="pagination-item">
						<div className="post-image">
							<img src={post.image} alt="" />
						</div>
						<div className="post-content">
							<a href="#"> {"< Previsous"}</a>
							<h4>{post.title}</h4>
						</div>
					</div>
					<div className="pagination-item">
						<div className="post-image">
							<img src={post.image} alt="" />
						</div>
						<div className="post-content">
							<a href="#"> {"> Next"}</a>
							<h4>{post.title}</h4>
						</div>
					</div>
				</div>
				<div className="comments-wrapper section-inner">
					<div className="comments" id="comments">
						<div className="comments-header section-inner small max-percentage">
							<h2 className="comment-reply-title">
								1 Comment
							</h2>
						</div>
						<div className="comments-inner section-inner thin max-percentage">
							<div id="comment-1" className="comment even thread-even depth-1">
								<article id="div-comment-1" className="comment-body">
									<footer className="comment-meta">
										<div className="comment-author vcard">
											<a href="" rel="external nofollow" className="url">
												<img src={comment.avatar} alt="" /><span className="fn">{comment.author}</span>
											</a>
											<span className="screen-reader-text says">{" says:"}</span>
										</div>
										<div className="comment-metadata">{comment.date}</div>
									</footer>
									<div className="comment-content entry-content">
										<p>{comment.content}</p>
									</div>
									<footer className="comment-footer-meta">
										<span className="comment-reply"><a rel='nofollow' class='do-not-scroll comment-reply-link' href='' data-commentid="1" data-postid="1" data-belowelement="div-comment-1" data-respondelement="respond" aria-label='Reply to A WordPress Commenter'>Reply</a></span>
									</footer>
								</article>
							</div>
						</div>

					</div>
					<hr className="styled-separator is-style-wide" aria-hidden="true" />
					<div id="respond" className="comment-respond">
						<h2 id="reply-title" className="comment-reply-title">Leave a comment</h2>
						<form action="" method="post" id="commentform" className="section-inner thin max-percentage" novalidate>
							<p className="comment-form-comment">
								<label for="comment">Comment</label>
								<textarea id="comment" name="comment" cols="45" rows="8" maxlength="65525" required="required"></textarea>
							</p>
							<p className="comment-form-author">
								<label for="author">Name <span className="required">*</span></label>
								<input id="author" name="author" type="text" size="30" maxlength="245" required='required' />
							</p>
							<p className="comment-form-email">
								<label for="email">Email <span className="required">*</span></label>
								<input id="email" name="email" type="email" size="30" maxlength="100" aria-describedby="email-notes" required='required' />
							</p>
							<p className="comment-form-cookies-consent">
								<input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes" />
								<label for="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label></p>
							<p className="form-submit">
								<input name="submit" type="submit" id="submit" className="submit" value="Post Comment" /> <input type='hidden' name='comment_post_ID' value='1' id='comment_post_ID' />
								<input type='hidden' name='comment_parent' id='comment_parent' value='0' />
							</p>
						</form>
					</div>

				</div>
			</div>
			<div className="sidebar">
				<div className="card">
					<h3>Search</h3>
					<form >
						<input type="text" placeholder="Search.." name="search" />
						<button type="submit"><i className="fa fa-search"></i></button>
					</form>
				</div>
				<div className="card">
					<h3>Popular posts</h3>
					{popular.map((post) => {
						return (
							<div className="post">
								<div className="post-image">
									<img src={post.image} alt="" />
								</div>
								<div className="post-content">
									<h4>{post.title}</h4>
									<p>{post.subTitle}</p>
								</div>
							</div>
						);
					})}

				</div>
				<div className="card">
					<h3>Categories</h3>
					{categories.map((item) => {
						return (
							<div className="cat-item">
								<div className="item-name">
									<h4>{item.name}</h4>
								</div>

								<h4>{item.number}</h4>
							</div>
						);
					})}

				</div>
				<div className="card">
					<h3>Tags</h3>
					<div className="tags">
						{tags.map((item) => {
							return (
								<div className="tag">
									{item}
								</div>
							);
						})}
					</div>
				</div>
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
	  .star-rating {
		padding-inline:20px;

	  }
	  button {
		background-color: transparent;
		border: none;
		outline: none;
		cursor: pointer;
		font-size:2rem;
	  }
	  .on {
		color: #F2994A;
	  }
	  .off {
		color: #ccc;
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
    .pagination {
      display: flex;
      flex-direction: row;
			border-top: 1px solid #DEDEDE;
			border-bottom: 1px solid #DEDEDE;
			padding-top:10px;
			justify-content: space-between;
      .pagination-item {	
        display:flex;
				flex-direction:row;
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
          justify-content: center;
	      }
      }
    }
		.comments {
			margin: 20px 0;
		}
		
		.comment-author {
			img {
				width: 100px;
				border-radius: 50%;
			}
			.fn {
				font-weight:bold;
				color:black;
			}
		}
		.comment-metadata {
			color:gray;
		}
		.comment-reply-link {
			background-color: #3B71FE;
			color: #fff;
			display: block;
			padding: 0.3rem;
			width: max-content;
		}

		.comment-reply-title {
			margin-bottom: 20px;
		}
		
		.comment-respond {
			margin-bottom: 10px;
			.comment-form-author,.comment-form-email {
				float: left;
				width: calc(50% - 1rem);
				input, label{
					display: block;
				}
			}
			.comment-form-email {
				margin-left: 2rem;
			}
			input, textarea {
				margin-bottom: 10px;
			}
			input[type="text"], input[type="email"], textarea {
				display: block;
				border: 1px solid #DEDEDE;
				padding: 1rem 1.3rem;
				font-size: 1rem;
				width: 100%;
				max-width: 100%;
			}
			input[type="checkbox"] + label {
				display: inline;
				font-weight: 400;
				margin-left: 0.5rem;
		}
			input[type="submit"] {
				padding: 1.1em 1.44em;
				background-color: #3B71FE;
				color: white;
				border-radius: 1rem;
				margin-top: 10px;
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
