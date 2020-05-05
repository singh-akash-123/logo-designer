import React, { Component } from 'react';
import ReactDom from 'react-dom';
import LogoDisplay from './LogoDisplay';
import './style.css';
class Gallery extends Component{
    render(props){
        const ImgList = [
            {
                id: 1,
                src: "images/1-4.png",
                name: "Eortica web solution"
            },
            {
                id: 2,
                src: "/images/1-6.png",
                name: "Zielotect"
            },
            {
                id: 3,
                src: "/images/1-7.png",
                name: "Shivam Fintech"
            },
            {
                id: 4,
                src: "/images/1-8.png",
                name: "Roach free"
            },
            {
                id: 5,
                src: "/images/1-21.png",
                name: "One step network"
            },
            {
                id: 6,
                src: "/images/1-14.png",
                name: "DFMS solution"
            },
            {
                id: 7,
                src: "/images/1-10.png",
                name: "Protection X security"
            },
            {
                id: 8,
                src: "/images/1-19.png",
                name: "U.K. Agro"
            },{
                id: 9,
                src: "/images/1-26.png",
                name: "Lotus Clinic"
            },
            {
                id: 10,
                src: "/images/1-30.png",
                name: "Invest 2 Insure"
            },
            {
                id: 11,
                src: "/images/2-1.png",
                name: "Softline Computers"
            },
            {
                id: 12,
                src: "/images/2-3.png",
                name: "Swara tours"
            },
            {
                id: 13,
                src: "/images/2-5.png",
                name: "Wipes"
            },
            {
                id: 14,
                src: "/images/2-8.png",
                name: "Pranjal Real Estate"
            },
            {
                id: 15,
                src: "/images/2-9.png",
                name: "Universal Construction"
            },
            {
                id: 16,
                src: "/images/2-10.png",
                name: "Radical Lab"
            },
            {
                id: 17,
                src: "/images/2-12.png",
                name: "Sibra"
            },
            {
                id: 18,
                src: "/images/2-18.png",
                name: "Kingbird"
            },
            {
                id: 19,
                src: "/images/3-1.png",
                name: "Sam'sagromach"
            },
            {
                id: 20,
                src: "/images/3-4.png",
                name: "Effectuate Engineer"
            }

        ]
        const arrayList = ImgList.map((Image, i) => {
            return <LogoDisplay id={ImgList[i].id} src={ImgList[i].src} name={ImgList[i].name} />
        })
        return(
            <div className="gallery">
                <div className="container">
                    <h2>Gallery</h2>
                    <div className="logoGallery">
                        {arrayList}
                    </div>
                </div>
            </div>
        );
    }
}
export default Gallery;
