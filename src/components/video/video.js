import './video.scss';

const Video = () =>{
   return(
       <div className='video'>
            <div className='wrp-container'>
               <div className='video__bg'>
                   <div className='video__url'>
                       <iframe src="https://www.youtube.com/embed/-vvDLrN9smI" title='video__wedding' ></iframe>
                   </div>
               </div>
           </div>
       </div>
   )
}

export default Video;

