
import "./location.scss"
import Rouse from './../rose/rouse.js';
import CountdownTimer from "../countdown/countdown";

const Location = () =>{
    return(<>
       
        <Rouse />

        <section className="location">
            <div className="location__images">
                <div className="wrp-container">
                    <div className="location__text">
                        <h2 className="hdg-lv2 h2">The big day <br /> 30 April 2023</h2>
                        <p className="location__text--p">We are so excited to celebrate our special day with our family and friends. Thank you so much for visiting our wedding website!</p>

                        <CountdownTimer />
                    </div>
                </div>

            </div>
        </section>
        </>
    )
}





export default Location;