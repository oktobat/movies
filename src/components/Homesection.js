import React from 'react';
import Slider from "react-slick";
import './Homesection.scss';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';


const Article = styled.div`
     position:relative; z-index:1; 
    .slick-arrow { position:absolute; top:50%; transform:translateY(-50%);
        background:none; padding:10px; z-index:99999; width:60px; height:60px; color:red;
       &.slick-prev { left:100px;  }
       &.slick-next { right:100px;  }    
    }
    .slick-dots { position:absolute; bottom:30px; left:50%; transform:translate(-50%); 
        li { display:inline-block; 
            &+li { padding-left:10px }
            button { width:30px; height:30px; border-radius:50%; background:#fff; 
                text-indent:-99999px; overflow:hidden; }
            &.slick-active { button { background:red } }    
        }
        
    }

    .slide { position:relative;
        height:30vw !important;
        background-size:cover;
        background-repeat:no-repeat;
        background-size:cover;
        background-position:center;
        .text {
            position:absolute; left:50%; text-align:center;
            top:50%; transform:translate(-50%, -50%);
            color:#fff; font-size:50px;
            button { padding:10px; border:none; background:#fff; border-radius:10px;
               &:hover { background:red; color:lime }                
            }
        }
    };
    .slide1 { background-image:url('images/img3.jpg')};
    .slide2 { background-image:url('images/img5.jpg')};
    .slide3 { background-image:url('images/img7.jpg')};
`;


const Homesection = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:4000,
        prevArrow : <IoIosArrowDropleftCircle />,
        nextArrow : <IoIosArrowDroprightCircle />
      };

    return (
        <div className="homesecWrap">
           <Article className="article1">
             <Slider {...settings}>
                    <div className="slide slide1">
                        <div className="text row">
                            <p>이제, 여행은 가까운 곳에서1</p>
                            <button>근처의 숙소 둘러보기1</button>
                        </div>
                    </div>
                    <div className="slide slide2">
                        <div className="text row">
                            <p>이제, 여행은 가까운 곳에서2</p>
                            <button>근처의 숙소 둘러보기2</button>
                        </div>
                    </div>
                    <div className="slide slide3">
                        <div className="text row">
                            <p>이제, 여행은 가까운 곳에서3</p>
                            <button>근처의 숙소 둘러보기3</button>
                        </div>
                    </div>
                </Slider>
           </Article>
           <article className="article2">
               <div className="row">
                   <ul>
                       <li>
                           <a href="#">
                               <img src="https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg" alt="" />
                               <div>
                                   <strong>부산</strong>
                                   <p>차로 4.5시간 거리</p>
                               </div>
                           </a>
                       </li>
                       <li>
                           <a href="#">
                               <img src="https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg" alt="" />
                               <div>
                                   <strong>부산</strong>
                                   <p>차로 4.5시간 거리</p>
                               </div>
                           </a>
                       </li>
                       <li>
                           <a href="#">
                               <img src="https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg" alt="" />
                               <div>
                                   <strong>부산</strong>
                                   <p>차로 4.5시간 거리</p>
                               </div>
                           </a>
                       </li>
                       <li>
                           <a href="#">
                               <img src="https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg" alt="" />
                               <div>
                                   <strong>부산</strong>
                                   <p>차로 4.5시간 거리</p>
                               </div>
                           </a>
                       </li>
                       <li>
                           <a href="#">
                               <img src="https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg" alt="" />
                               <div>
                                   <strong>부산</strong>
                                   <p>차로 4.5시간 거리</p>
                               </div>
                           </a>
                       </li>
                       <li>
                           <a href="#">
                               <img src="https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg" alt="" />
                               <div>
                                   <strong>부산</strong>
                                   <p>차로 4.5시간 거리</p>
                               </div>
                           </a>
                       </li>
                   </ul>
                   <div className="lifeStyle">
                       <h2>어디에서나, 여행은 살아보는거야!</h2>
                       <ul>
                           <li>
                               <img src="https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg" alt="" />
                               <strong>집 전체</strong>
                           </li>
                           <li>
                               <img src="https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg" alt="" />
                               <strong>집 전체</strong>
                           </li>
                           <li>
                               <img src="https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg" alt="" />
                               <strong>집 전체</strong>
                           </li>
                       </ul>
                   </div>
               </div>
           </article>
           <article className="article3">
              <div className="row">
                  <div>
                      <img src='images/img8.jpg' alt="" />
                      <p>상하이 샤오롱바오 만드는 법 배우기</p>
                  </div>
                  <div className="right">
                      <div className="rightFst">
                          <div>
                            <img src="images/img4.jpg" alt="" />
                            <p>상하이 샤오롱바오 만드는 법 배우기</p>
                          </div>
                          <div>
                            <img src="images/img6.jpg" alt="" />
                            <p>상하이 샤오롱바오 만드는 법 배우기</p>
                          </div>
                      </div>
                      <div>
                        <img src="images/img5.jpg" alt="" />
                        <p>상하이 샤오롱바오 만드는 법 배우기</p>
                      </div>
                  </div>
              </div>
           </article>
        
        
        </div>
    );
};

export default Homesection;