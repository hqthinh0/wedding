import './event.scss';

import bg1 from '../../assets/img/gallery_img--06.jpg'
import bg2 from '../../assets/img/gallery_img--05.jpg'
import bg3 from '../../assets/img/gallery_img--04.jpg'
import bg4 from '../../assets/img/gallery_img--03.jpg'


const Event = () =>{


    return(<>

    
        <section className='events'>
           <div className='wrp-container'>
                <div className='events__title'>
                    <h2 className="hdg-lv2 h2">thời gian tổ chức các sự kiện</h2>
                </div>
                
           </div>
            <div className='events__timeline'>
                <div className='events__timeline--item'>
                    <div className='events__timeline--bg' style={{ backgroundImage: `url(${bg1})` }}></div>
                    <div className='events__timeline--title'>
                        <h4 className='hdg-lv4 lv4'>đám hỏi</h4>
                    </div>
                    <div className='events__timeline--content'>
                        <h4 className='hdg-lv4 lv4'>20-04-2023</h4>
                        <p>Mauris cursus magna at libero lobortis tempor. Suspendisse potenti. Aliquam interdum vulputate neque sit amet varius. Maecenas ac pulvinar nisi. Fusce vitae nunc ultrices, tristique dolor at, porttitor dolor. Etiam id cursus arcu, in dapibus nibh. Pellentesque non porta leo. Nulla eros odio, egestas quis efficitur vel, pretium sed.</p>
                    </div>
                </div>
                <div className='events__timeline--item'>
                    <div className='events__timeline--bg' style={{ backgroundImage: `url(${bg2})` }}></div>
                    <div className='events__timeline--title'>
                        <h4 className='hdg-lv4 lv4'>đám hỏi</h4>
                    </div>
                    <div className='events__timeline--content'>
                        <h4 className='hdg-lv4 lv4'>20-04-2023</h4>
                        <p>Mauris cursus magna at libero lobortis tempor. Suspendisse potenti. Aliquam interdum vulputate neque sit amet varius. Maecenas ac pulvinar nisi. Fusce vitae nunc ultrices, tristique dolor at, porttitor dolor. Etiam id cursus arcu, in dapibus nibh. Pellentesque non porta leo. Nulla eros odio, egestas quis efficitur vel, pretium sed.</p>
                    </div>
                </div>
                <div className='events__timeline--item'>
                    <div className='events__timeline--bg' style={{ backgroundImage: `url(${bg3})` }}></div>
                    <div className='events__timeline--title'>
                        <h4 className='hdg-lv4 lv4'>đám hỏi</h4>
                    </div>
                    <div className='events__timeline--content'>
                        <h4 className='hdg-lv4 lv4'>20-04-2023</h4>
                        <p>Mauris cursus magna at libero lobortis tempor. Suspendisse potenti. Aliquam interdum vulputate neque sit amet varius. Maecenas ac pulvinar nisi. Fusce vitae nunc ultrices, tristique dolor at, porttitor dolor. Etiam id cursus arcu, in dapibus nibh. Pellentesque non porta leo. Nulla eros odio, egestas quis efficitur vel, pretium sed.</p>
                    </div>
                </div>
                <div className='events__timeline--item'>
                    <div className='events__timeline--bg' style={{ backgroundImage: `url(${bg4})` }}></div>
                    <div className='events__timeline--title'>
                        <h4 className='hdg-lv4 lv4'>đám hỏi</h4>
                    </div>
                    <div className='events__timeline--content'>
                        <h4 className='hdg-lv4 lv4'>20-04-2023</h4>
                        <p>Mauris cursus magna at libero lobortis tempor. Suspendisse potenti. Aliquam interdum vulputate neque sit amet varius. Maecenas ac pulvinar nisi. Fusce vitae nunc ultrices, tristique dolor at, porttitor dolor. Etiam id cursus arcu, in dapibus nibh. Pellentesque non porta leo. Nulla eros odio, egestas quis efficitur vel, pretium sed.</p>
                    </div>
                </div>
                
            </div>
            
    
        </section>
    </>)

}

export default Event;