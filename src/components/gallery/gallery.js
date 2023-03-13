import React from "react";
import './gallery.scss';
import img1 from '../../assets/img/gallery_img--01.jpg';
import img2 from '../../assets/img/gallery_img--02.jpg';
import img3 from '../../assets/img/gallery_img--03.jpg';
import img4 from '../../assets/img/gallery_img--04.jpg';

 
const gallery = () => {
    let data = [
       {
            id: 1,
            imgSrc: img1,
       },
        {
            id: 2,
            imgSrc: img2,
        },
        {
            id: 3,
            imgSrc: img3,
        },
        {
            id: 4,
            imgSrc: img4,
        },
        

    ]

    return(
        <>
            <div className="gallery grid-row">
                {data.map((item,index) =>{
                    return(
                        <div className="gallery__pic grid-col--6" key={index}>
                            <img srcSet={item.imgSrc} alt="" className="fluid-image"/>
                        </div>
                    )
                })}
            </div>
        </>
    )

}

export default gallery;