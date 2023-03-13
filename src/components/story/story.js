import './story.scss';

// import imgStore from '../../assets/img/photo-wedding.png';
import Gallery from "../gallery/gallery";
import bride from '../../assets/img/bride.png';
import groom from '../../assets/img/groom.png';
//https://www.npmjs.com/package/react-grid-gallery







const storyWedding = () =>{
    return(<>
        <section className='story'>
            <div className='story__container wrp-container'>
                <div className='story__flex grid-row'>
                    <div className='grid-col--4'>
                        <div className='story__txt'>
							<div className='story__bride-groom'>
								<img className='fluid-image' srcSet={bride} alt=''></img>
							</div>
							<h2 className='story__lv2 hdg-lv2'>Võ hoàng Thanh Hân</h2>
							<p className='story__txt--content'>Mời chú rể giới thiệu về bản thân ở đây nha. Chú rể có thể trả lời những câu hỏi cơ bản như tên đầy đủ là gì nè, bao tuổi rùi, nhà ở đâu, sở thích, ưu điểm, khuyết điểm, ...</p>
                        </div>
                    </div>
					<div className='story_gallery grid-col--4'>
						<Gallery/>
					</div>
					<div className='grid-col--4'>
							<div className='story__bride-groom'>
								<img className='fluid-image' srcSet={groom} alt=''></img>
							</div>
						<div className='story__txt'>
							<h2 className='story__lv2 hdg-lv2'>nguyễn hoàng vũ</h2>
							<p className='story__txt--content'>Mời chú rể giới thiệu về bản thân ở đây nha. Chú rể có thể trả lời những câu hỏi cơ bản như tên đầy đủ là gì nè, bao tuổi rùi, nhà ở đâu, sở thích, ưu điểm, khuyết điểm, ...</p>
						</div>
					</div>
                </div>
            </div>
        </section>
    </>)
}

export default storyWedding;