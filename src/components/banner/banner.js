import React from "react";
import "./banner.scss";
// import $ from 'jquery';
import imagesBanner from "../../assets/img/header.png";
// import headerBorderTop from "../../assets/img/header-border-top.png";
// import headerBorderBot from "../../assets/img/header-border-bottom.png";
const mystyle = {
  backgroundSize: "cover",
  backgroundImage: "url(" + imagesBanner + ")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
};
const Banner = () => {
  return (
    <>
		<section>
        <div className="box-mainvisual">
          <div className="box-mainvisual__bg" style={mystyle}>
            <div className="wrp-container wrp-box__content">
              <div className="box-mainvisual__border"></div>
              <div className="wrp-container">
                <div className="box-mainvisual__txt">  
                  <h2 className="hdg-lv2 lv2 box-mainvisual__txt--bride box-mainvisual__text">võ hoàng thanh hân</h2>


                  {/* <div className=" ">
                   
                    </div> */}
                  <div className="box-mainvisual__rings"></div>
                  <h2 className="hdg-lv2 lv2 box-mainvisual__txt--groom box-mainvisual__text">nguyễn hoàng gia bảo</h2>
                  {/* <div className="">
                    
                  </div> */}
                 </div>
              </div>
            </div>
          </div>
        </div>
    </section>
		
    </>
  );
};

export default Banner;
