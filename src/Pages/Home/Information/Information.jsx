
import './info.css'
import { GiWifiRouter } from "react-icons/Gi";
import { LuMonitorSmartphone } from "react-icons/Lu";
import { AiOutlineMobile } from "react-icons/Ai";
const Information = () => {
    return (
        <div>
           
           <div className=" info-wrap gap-2 flex flex-col md:flex-col lg:flex-row  ">
                {/* fiber  */}
                <div className=" info border w-5/6  lg:w-1/3 flex-col md:flex-col lg:flex-row bg-beige ">
                    <div className='info-text w-6/12	'>
                        <h1 className='info_text_header'>Fiber Brodbrand</h1>
                        <p className='info_text_peragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit.?</p>
                    </div>
                    <div className='w-6/12 info-img	'>
                       <div className='info-icon'> <GiWifiRouter/></div>
                    </div>
                </div>
                 {/* tv streaming */}
                <div className=" info border hover w-5/6  lg:w-1/3 flex-col md:flex-col lg:flex-row bg-beige ">
                    <div className='info-text w-6/12	'>
                        <h1 className='info_text_header'>Tv & streaming</h1>
                        <p className='info_text_peragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit.?</p>
                    </div>
                    <div className='w-6/12 info-img	'>
                       <div className='info-icon'> <LuMonitorSmartphone/></div>
                    </div>
                </div>
               {/* all for mobail  */}
                <div className=" info border w-5/6  lg:w-1/3 flex-col md:flex-col lg:flex-row bg-beige ">
                    <div className='info-text w-6/12	'>
                        <h1 className='info_text_header'>All for mobail internet & gaming</h1>
                        <p className='info_text_peragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit.?</p>
                    </div>
                    <div className='w-6/12 info-img	'>
                       <div className='info-icon'> <AiOutlineMobile/></div>
                    </div>
                </div>
  
            </div>
           
        </div>
    );
};

export default Information;