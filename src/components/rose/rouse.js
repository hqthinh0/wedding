import "./rouse.scss";
import rouse from '../../assets/img/location-icon3.png';

// const mystyle = {
//     backgroundSize: "cover",
//     backgroundImage: "url(" + rouse + ")",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center center",
// };

const Rouse = () =>{
    return(<>
        <div className="rouse01 rouse_bg" >
            <img className="rouse01__img fluid-image" src={rouse} alt="" />
        </div>
        <div className="rouse02 rouse_bg"></div>
    </>)

}

export default Rouse;