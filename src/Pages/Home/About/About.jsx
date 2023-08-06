import './About.css'
import '../../../Pages/Common.css'
import aboutimg from'../../../assets/aboutUs/aboutus.jpg';
import aboutimg1 from'../../../assets/aboutUs/aboutus1.jpg';
import SectionTitle from '../../../Components/SectionTitle';


const About = () => {
    return (
        <div>
            <div className="hero ">
                <div className="hero-content flex-col  lg:flex-row">
                        {/* <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
                    <div className='about_left sm:w-full md:w-6/12 lg:w-6/12 '>
                        <img className='about_img_below' src={aboutimg} alt="" />
                        <img className='about_img_above' src={aboutimg1} alt="" />
                    </div>
                    <div className='about_right sm:w-full md:w-6/12 lg:w-6/12 '>
                        {/* <span className="text-xl about_right_span "> ``About us</span>
                        <h1 className="text-5xl font-bold">Providing broadband service with fast internet</h1> */}
                       <SectionTitle subHeading={"About us"} heading={"Providing broadband service with fast internet"}></SectionTitle>
                        <p className='about_right_short_drescription'>Phasellus non cursus ligula, sed mattis urna. Aenean ac tor gravida, volutpat quam eget, consequat elit.</p>
                        <p className='about_right_drescription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo illum ipsum veritatis autem vero nihil? Asperiores autem placeat blanditiis magni tenetur, ex similique excepturi laborum repellendus aut sapiente. Quisquam, alias.</p>
                        <ul className='about_right_fitchers'>
                            <li className='about_right_fitcher'> Internet & TV service solutions</li>
                            <li className='about_right_fitcher'>Top quality services with reasonable price</li>
                            <li className='about_right_fitcher'>Live sports and TV shows with ultra fast speed</li>
                        </ul>
                        <button className='btn my-4'>Discover more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;