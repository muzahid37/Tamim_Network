import './ServiceHome.css'
import '../../Common.css'
import { TbSettingsStar } from 'react-icons/Tb';
import { RiCustomerService2Fill } from 'react-icons/Ri';
import { BiTachometer } from 'react-icons/Bi';
import { PiMoneyBold } from 'react-icons/Pi';
import ServiceBG from"./.././../../assets/Service/servise_BG.png"
import ServiceBG2 from"./.././../../assets/Service/service-bg-2.png"
import SectionTitle from '../../../Components/SectionTitle';
const ServiceHome = () => {
  return (
    <div className="ServiceHome">
      <div className='Services_bg_image-1 service_bg_animition'>
        <img src={ServiceBG} alt="" />
      </div>
      <div className='Services_bg_image-2 service_bg_animition'>
        <img src={ServiceBG2} alt="" />
      </div>
      <div className="ServiceHomeTop">
        <div className="card lg:card-side ">
          <div className="card-body lg:w-6/12">
            {/* <span className="ServiceHome_card_hint">``Out Service</span>
            <h2 className="ServiceHome_card_title">Why you should choose zeinet services</h2> */}
              <SectionTitle subHeading={"Out Service"} heading={"Why you should choose zeinet services"}></SectionTitle>
          </div>
          <div className="card-body lg:w-6/12">
            <p className='ServiceHome_description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque assumenda culpa consectetur suscipit illum eum error repudiandae quis sunt tempora, eos tempore facilis. Possimus laborum asperiores nulla perspiciatis voluptates culpa?</p>
          </div>

        </div>


        <div className='servicesHomeItems flex-col flex lg:flex-row  lg:w-full mb-6'>
            <div className="card w-5/6 lg:w-3/12 servicesHomeItem  mb-5 shadow-xl ">
              <figure className="px-10 pt-10 servicesHomeItems_icon">
              <TbSettingsStar></TbSettingsStar>
              </figure>
              <div className="card-body items-center text-center ">
                  <h2 className="card-title servicesHomeItems_title">Installation</h2>
              </div>
            </div>

            <div className="card w-5/6 lg:w-3/12 servicesHomeItem  mb-5 shadow-xl ">
              <figure className="px-10 pt-10 servicesHomeItems_icon">
             <RiCustomerService2Fill></RiCustomerService2Fill>
              </figure>
              <div className="card-body items-center text-center ">
                  <h2 className="card-title servicesHomeItems_title">Ultra fast</h2>
              </div>
            </div>

            <div className="card w-5/6 lg:w-3/12 servicesHomeItem  mb-5 shadow-xl ">
              <figure className="px-10 pt-10 servicesHomeItems_icon">
                <BiTachometer></BiTachometer>
              </figure>
              <div className="card-body items-center text-center ">
                  <h2 className="card-title servicesHomeItems_title">Cheap plan</h2>
              </div>
            </div>
            <div className="card w-5/6 lg:w-3/12 servicesHomeItem  mb-5 shadow-xl ">
              <figure className="px-10 pt-10 servicesHomeItems_icon">
             <PiMoneyBold></PiMoneyBold>
              </figure>
              <div className="card-body items-center text-center ">
                  <h2 className="card-title servicesHomeItems_title">24/7 Service</h2>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ServiceHome;
