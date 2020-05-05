import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default class SimpleSlider extends Component {
  render() {

    const clientArray = [
      {
        id: 1,
        name: "Sumit Singh",
        img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png",
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      },
      {
        id: 2,
        name: "Ganesh Sawant",
        img: "/images/Ganesh.jpg",
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      },
      {
        id: 3,
        name: "Shashank Singh",
        img: "https://i.pinimg.com/originals/df/77/f0/df77f0e60d8f15c24ffc57e8fe83373c.png",
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      },
      {
        id: 4,
        name: "Akash Singh",
        img: "images/akashnew.jpeg",
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      },
      {
        id: 5,
        name: "Pawan Pandey",
        img: "https://www.clipartmax.com/png/middle/144-1448493_avatar-headset-male-man-support-user-young-icon-commercial-sedentaire.png",
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      }
    ]

    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      className: "slides"
    };
    return (
      <div className="client-container">
        
        <Slider {...settings}>
            {clientArray.map((client) => {
              return(
                <div className="img">
                  <img src={client.img}/>
                  <div className="text">
                    <h3>{client.name}</h3>
                    <p>{client.comment}</p>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    );
  }
}
