import { Parallax } from 'react-parallax';
import "./Components.css"
const Banner = ({img,BannerHeader}) => {
    
    return (
        <Parallax
        blur={{ min: -10, max: 15 }}
        bgImage={img}
        bgImageAlt="the cover"
        strength={-200}
       
    >
         <div className="common_banner ">
            {/* <div className="Banner_header">
                <h1 className="Banner_heading">{BannerHeader}</h1>
            </div>  */}
            <div className="hero h-[100px]">
              <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold Banner_heading">{BannerHeader}</h1>
               
                </div>
            </div>
            </div>
        </div>
    </Parallax>
      
    );
};

export default Banner;