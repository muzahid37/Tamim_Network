import './About.css'
import '../../../Pages/Common.css'
import SectionTitle from '../../../Components/SectionTitle';
// import About_containt from './About_containt';
// import AboutHomeImg from './AboutHomeImg';
import { Link } from 'react-router-dom';
import Button from '../../../Components/Button';
import AboutHomeImg from '../../AboutUs/About/AboutHomeImg';
import About_containt from '../../AboutUs/About/About_containt';
// import AboutHomeImg from './AboutHomeImg';
// import About_containt from './About_containt';


const AboutHome = () => {
    return (
        <div>
            <div className="hero ">
                <div className="hero-content flex-col  lg:flex-row">
                        {/* <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
                    <AboutHomeImg></AboutHomeImg>
                    <div className='about_right sm:w-full md:w-6/12 lg:w-6/12 '>
                       
                       <SectionTitle subHeading={"About us"} heading={"Providing broadband service with fast internet"}></SectionTitle>
                     <About_containt></About_containt>
                     <Link to='/aboutUs'><Button btn={"DISCOVER MORE"}></Button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHome;