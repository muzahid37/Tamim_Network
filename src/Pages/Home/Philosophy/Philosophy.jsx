import './Philosophy.css'
import philosophy from"../../../assets/pronto-frame.svg"
// import philosophy1 from"../../../assets/philosophy1.png"
const Philosophy = () => {
    return (
        <div>
            <div className="Philosophy_heading text-center max-w-3xl mx-auto	">
                <h1 style={{color:'inherit'}} className="text-4xl leading-5	mb-7">OUT PHELOSOPHY</h1>
                <h3 style={{color:'inherit'}} className="text-2xl leading-5 mb-4">Our philosophy is to empower our users to bring passion to their life.</h3>
                <p style={{color:'inherit'}} className="text-xl leading-5">We are enabling a superior digital lifestyle by the touch of a great broadband internet service nationwide in which every moment and experience is filled with the joy of celebration.</p>
            </div>
            <div className="philosophy_body max-h-max">
                <div className="philosophy_body_img">
                    <div className='philosophy_body_img_top'>
                       
                        <img className='mx-auto max-w-full	h-auto	' src={philosophy} alt="" />
                        <div className='pkg_title'>
                            <h2>
                                <span>Out</span>
                                Most popular package
                            </h2>
                        </div>
                        <div className='pronto_frame'></div>

                        
                    </div>    
                    <div>
                        {/* <img className='philosophy_body_img_bottom' src={philosophy1} alt="" /> */}
                    </div>

                </div>
            </div>
        </div>
       
        
    );
};

export default Philosophy;