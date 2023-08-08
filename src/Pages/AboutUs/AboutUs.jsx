import Banner from "../../Components/Banner";
import AboutImg from '../../assets/aboutUs/aboutus.jpg'
import AboutHomeImg from "./About/AboutHomeImg";
import About_containt from "./About/About_containt";


const AboutUs = () => {
    return (
        <div>
           <section className="mb-10 ">
               <Banner img={AboutImg} BannerHeader={"About Us"}></Banner>
            </section>
            <section className="my-20">
                
                <About_containt></About_containt>
                <AboutHomeImg></AboutHomeImg>
            </section>
        </div>
    );
};

export default AboutUs;