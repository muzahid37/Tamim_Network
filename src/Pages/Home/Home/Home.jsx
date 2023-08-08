
import AboutHome from "../AboutHome/AboutHome";
import Banner from "../Banner/Banner";
import BestPackageHome from "../BastPackageHome/BestPackageHome";
import BlogsHome from "../BlogHome/BlogsHome";
import CommonPackage from "../CommonPlans/ComonPakge";
import Information from "../Information/Information";
import ServiceHome from "../Services/ServiceHome";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Information></Information>
            <AboutHome></AboutHome>
            <ServiceHome></ServiceHome>
            <BestPackageHome></BestPackageHome>
            <CommonPackage></CommonPackage>
            <BlogsHome></BlogsHome>
            
            
            
            
        </div>
    );
};

export default Home;