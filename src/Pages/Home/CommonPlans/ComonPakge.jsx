import './CommonPakge.css'
import './../../Common.css'

import { FcWiFiLogo } from 'react-icons/Fc';
import SectionTitle from '../../../Components/SectionTitle';

const CommonPackage = () => {
    return (
        <div>
            <div className="common_package_top">
                <div className="card lg:card-side text-center my-10">
                    <div className="card-body lg:w-6/12">
                        {/* <span className="ServiceHome_card_hint">``TARIFFS PLAN</span>
                       
                       <h2 className="ServiceHome_card_title">Choose our perfect Broadbrand plans</h2> */}
                       <SectionTitle subHeading={"TARIFFS PLAN"} heading={'Choose our perfect Broadbrand plans'}></SectionTitle>
                    </div>
                </div>
            </div>
            <div className="common_package_bottom  flex flex-col md:flex-col lg:flex-row">


                <div className="card common_package_box lg:card-side text-center border w-5/6  lg:w-1/3 my-10">
                    <div className="card-body">
                        <span className="ServiceHome_card_hint">Personal package</span>
                        <h2 className=" font-bold text-4xl">Fiber Internet</h2>
                        <span className="common_package_icon text-6xl shadow-xl	">
                            <FcWiFiLogo></FcWiFiLogo>
                        </span>
                        <div className=' w-11/12 common_package_bottom_body '>
                            <ul className='common_package_bottom_body_ul'>
                                <li className='common_package_bottom_body_li'>Up to 10Mbps</li>
                                <li className='common_package_bottom_body_li'>Night Turbo-Speed</li>
                                <li className='common_package_bottom_body_li'>WiFi route</li>
                                <li className='common_package_bottom_body_li'>Unlimited devices</li>
                            </ul>
                            <div className='common_package_bottom_money'>
                                <div><span className='common_package_bottom_money_semble'>&#2547;</span>
                                <span className='common_package_bottom_money_amount'>1000</span></div>
                                <div className='common_package_bottom_money_div'>
                                <span className='common_package_bottom_money_name'>TAKA</span>
                                <span className='common_package_bottom_money_time'>/per month</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="card common_package_box lg:card-side text-center border w-5/6  lg:w-1/3 my-10">
                    <div className="card-body">
                        <span className="ServiceHome_card_hint">Family package</span>
                        <h2 className=" font-bold text-4xl">Fiber Internet</h2>
                        <span className="common_package_icon text-6xl shadow-xl	">
                            <FcWiFiLogo></FcWiFiLogo>
                        </span>
                        <div className=' w-11/12 common_package_bottom_body '>
                            <ul className='common_package_bottom_body_ul'>
                                <li className='common_package_bottom_body_li'>Up to 20Mbps</li>
                                <li className='common_package_bottom_body_li'>Night Turbo-Speed</li>
                                <li className='common_package_bottom_body_li'>WiFi route</li>
                                <li className='common_package_bottom_body_li'>Unlimited devices</li>
                            </ul>
                            <div className='common_package_bottom_money'>
                                <div><span className='common_package_bottom_money_semble'>&#2547;</span>
                                <span className='common_package_bottom_money_amount'>1700</span></div>
                                <div className='common_package_bottom_money_div'>
                                <span className='common_package_bottom_money_name'>TAKA</span>
                                <span className='common_package_bottom_money_time'>/per month</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            

                 <div className="card common_package_box lg:card-side text-center border w-5/6  lg:w-1/3 my-10">
                    <div className="card-body">
                        <span className="ServiceHome_card_hint">Professional package </span>
                        <h2 className=" font-bold text-4xl">Fiber Internet</h2>
                        <span className="common_package_icon text-6xl shadow-xl	">
                            <FcWiFiLogo></FcWiFiLogo>
                        </span>
                        <div className=' w-11/12 common_package_bottom_body '>
                            <ul className='common_package_bottom_body_ul'>
                                <li className='common_package_bottom_body_li'>Up to 50Mbps</li>
                                <li className='common_package_bottom_body_li'>Night Turbo-Speed</li>
                                <li className='common_package_bottom_body_li'>WiFi route</li>
                                <li className='common_package_bottom_body_li'>Unlimited devices</li>
                            </ul>
                            <div className='common_package_bottom_money'>
                                <div><span className='common_package_bottom_money_semble'>&#2547;</span>
                                <span className='common_package_bottom_money_amount'>2500</span></div>
                                <div className='common_package_bottom_money_div'>
                                <span className='common_package_bottom_money_name'>TAKA</span>
                                <span className='common_package_bottom_money_time'>/per month</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>    
        </div>
    );
};

export default CommonPackage;