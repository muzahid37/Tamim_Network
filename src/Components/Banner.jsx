
import "./Components.css"
const Banner = ({BannerHeader}) => {
    
    return (
        <div className="common_banner mb-10">
            <div className="Banner_header">
                <h1 className="Banner_heading">{BannerHeader}</h1>
            </div> 
        </div>
    );
};

export default Banner;