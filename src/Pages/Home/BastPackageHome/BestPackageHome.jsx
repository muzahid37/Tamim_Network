import './BestPackageHome.css'
import '../../Common.css'
import { GiWifiRouter } from "react-icons/Gi";
import SectionTitle from '../../../Components/SectionTitle';

const BestPackageHome = () => {
    return (
        <div className='bestPackage'>
       
            <div className='bestPackage_containt'>
                <div className="card bestOfferIter_description  w-8/12 ">
                    <div className="card-body">
                        <SectionTitle subHeading={"GET EXTRA BENEFIT"}></SectionTitle>
                        <h2 className="bestPackage_card_title">Save money by bundling your internet best offer </h2>
                    </div>
                    <div className="card-body ">
                        <p className='bestPackage_description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque assumenda culpa consectetur suscipit illum eum error repudiandae quis sunt tempora, eos tempore facilis. Possimus laborum asperiores nulla perspiciatis voluptates culpa?</p>
                    </div>

                </div>
                <div className="bestOfferIter  w-8/12 ">
                    <div className="bestOfferIterIcon">
                       <GiWifiRouter></GiWifiRouter>
                    </div>
                    <div className="card-body "> 
                        <h1 className=' text-white text-4xl text-bold'>1100 TAKA/Month</h1>
                        <span className=' bestOfferIterinfo text-xl'>8 mbps with special service</span>
                    </div>

                </div>
            </div> 
        </div>
    );
};

export default BestPackageHome;