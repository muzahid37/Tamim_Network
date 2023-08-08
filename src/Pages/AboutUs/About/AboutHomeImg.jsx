import aboutimg from'../../../assets/aboutUs/aboutus.jpg';
import aboutimg1 from'../../../assets/aboutUs/aboutus1.jpg';

const AboutHomeImg = () => {
    return (
        <div className='about_left sm:w-full md:w-6/12 lg:w-6/12  '>
            <img className='about_img_below' src={aboutimg} alt="" />
            <img className='about_img_above' src={aboutimg1} alt="" />
        </div>
    );
};

export default AboutHomeImg;