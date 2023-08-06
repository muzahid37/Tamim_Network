// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import './Banner.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// import banner from'../../../assets/banner/banner 1.jpg';
import banner1 from'../../../assets/banner/banner2.png';
import banner2 from'../../../assets/banner/banner.png';
// import banner3 from'../../../assets/banner/banner2.jpg';
import banner4 from'../../../assets/banner/banner3.png';

import ServiceBG from"./.././../../assets/Service/servise_BG.png"
import ServiceBG2 from"./.././../../assets/Service/service-bg-2.png"


const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen banner">
      <div className='Banner_bg_image-1 service_bg_animition' id=''>
        <img src={ServiceBG} alt="" />
      </div>
      <div className='Banner_bg_image-2 service_bg_animition'>
        <img src={ServiceBG2} alt="" />
      </div>
        <div className="hero-content flex-col lg:flex-row-reverse">

          
          <Carousel >
                <div>
                    <img src={banner4} className="max-w-sm " />
                </div>
                <div>
                    <img src={banner1} className="max-w-sm " />
                 
                </div>
                
                <div>
                    <img src={banner2} className="max-w-sm " />
                </div>
               
            </Carousel>
          
          <div className='max-w-screen-sm'>
            <h1 className="text-5xl font-bold banner_header">BANNER SECTION DESGAIN</h1>
            <p className="py-6 banner_psg">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn banner_btn">CONTACT WITH US</button>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Banner;
