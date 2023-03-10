
import "./location.scss"
import Rouse from './../rose/rouse.js';

const Location = () =>{
    return(<>
       
        <Rouse />
    <section className="localtion">
        <div className="wrp-container">
            <div className="localtion__title">
                <h3 className="hdg-lv3 h3"><span>trân trọng kính mời</span></h3>
                <div className="localtion__underline line"></div>
                <h4 className="hdg-lv4 h4">Hôn lễ sẽ diễn ra vào hồi</h4>
            </div>
        </div>
         
            
            {/* <div className="localtion__wedding ">
                    <div className="localtion__wedding--flex">
                        <div className="localtion__wedding--box grid-col--3 ">
                            <div className="localtion__wedding--heart">
                                <h3 className="hdg-lv3 h3">9:00p</h3>
                            </div>
                        </div>
                        <div className="localtion__wedding--box grid-col--3">
                            <div className="localtion__wedding--heart">
                                <h3 className="hdg-lv3 h3">22</h3>
                            </div>
                        </div>
                        <div className="localtion__wedding--box grid-col--3">
                            <div className="localtion__wedding--heart">
                                <h3 className="hdg-lv3 h3">05</h3>
                            </div>
                        </div>
                        <div className="localtion__wedding--box grid-col--3">
                            <div className="localtion__wedding--heart">
                                <h3 className="hdg-lv3 h3">2023</h3>
                            </div>
                        </div>
                   
                </div>
            </div>
        </div> */}
             <div className="localtion__wedding wrp-container">
                <div className="grid-row">
                        <div className="grid-col-2 localtion__wedding--col">
                            <div className="localtion__wedding--flex">
                                <div className="localtion__wedding--box">
                                 <div className="localtion__wedding--heart"></div>
                                 <h3 className="hdg-lv3 h3">9h00</h3>
                                </div>
                            </div>
                        </div>
                    <div className="grid-col-2 localtion__wedding--col">
                        <div className="localtion__wedding--flex">
                            <div className="localtion__wedding--box">
                                <div className="localtion__wedding--heart"></div>
                                <h3 className="hdg-lv3 h3">20</h3>
                            </div>
                        </div>
                    </div>
                    <div className="grid-col-2 localtion__wedding--col">
                        <div className="localtion__wedding--flex">
                            <div className="localtion__wedding--box">
                                <div className="localtion__wedding--heart"></div>
                                <h3 className="hdg-lv3 h3">02</h3>
                            </div>
                        </div>
                    </div>
                    <div className="grid-col-2 localtion__wedding--col">
                        <div className="localtion__wedding--flex">
                            <div className="localtion__wedding--box">
                                <div className="localtion__wedding--heart"></div>
                                <h3 className="hdg-lv3 h3">2023</h3>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
           
    </section>
    </>)

}

export default Location;