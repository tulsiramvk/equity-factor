import React from 'react'
import './Slider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { facebook, instagram, linkedin, twitter } from '../../Export';
import doubleBottom from '../../Images/double-bottom.jpg'
import tripleBottom from '../../Images/tripple-bottom.jpg'
import wedge from '../../Images/wedge.jpg'
import broadeningBottom from '../../Images/broadening-bottom.jpg'

const Slider = () => {
    return (
        <>
            <div className="width-80 mr_auto bg_yellow mb-2 space2">
                <div className="d-flex align_center justify_space_between dd">

                    <div className="social_block">
                        <a href={facebook} target='blank' className=''>
                            <i class="bi bi-facebook"></i>
                        </a>
                        <a href={twitter} target='blank' className=''>
                            <i class="bi bi-twitter"></i>
                        </a>
                        <a href={linkedin} target='blank' className=''>
                            <i class="bi bi-linkedin"></i>
                        </a>
                        <a href={instagram} target='blank' className=''>
                            <i class="bi bi-instagram"></i>
                        </a>
                    </div>

                    <div className="slider_block1">
                        <Carousel stopOnHover={true} swipeable={false} dynamicHeight={true} showArrows={false} showIndicators={false} renderArrowNext={() => false} renderArrowPrev={() => false} autoPlay={true} showStatus={false} infiniteLoop={true}>
                            <div className='sl_content pb-3'>
                                <div className="title2 mb-0">LEARN PRICE</div>
                                <div className="title2 mb-4">ACTION STRATEGIES</div>
                                <p className="c_content text-dark">
                                    <p>
                                        <b>The core of Technical Analysis is “Price Action”</b> it makes trader to enter in the market at right time and exit from market at right time”.
                                    </p>
                                    The Market Never Forgets, Past Price Action Often Predicts Future Price Action. - Nial Fuller
                                </p>
                                <div className="mt-5">
                                    <a href="/#about" className="button_outline_black">
                                        Know More
                                    </a>
                                </div>
                            </div>


                            <div className='sl_content pb-3'>
                                <div className="title2 mb-0">DO YOU KNOW?</div>
                                <div className="title2 mb-4">POWER OF TREND LINE</div>
                                <p className="c_content text-dark">
                                    <b>Prices moves in trends</b> is one of the premises on which technical approach is based, Learn the concept of trend line and know the trend of the market.
                                    <p>All Indicators and Oscillators are lagging but trend line is leading tool in technical analysis.</p>
                                </p>
                                <div className="mt-5">
                                    <a href="/#about" className="button_outline_black">
                                        Know More
                                    </a>
                                </div>
                            </div>

                            {/* <div className='sl_content pb-3'>
                                <div className="title2 mb-0">MODERN</div>
                                <div className="title2">ARCHITECT NEW</div>
                                <p className="c_content text-dark">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi velit molestias consequuntur veniam alias laboriosam vero, eaque perferendis ex reprehenderit.
                                </p>
                                <div className="mt-5">
                                    <a href="/#about" className="button_outline_black">
                                        Know More
                                    </a>
                                </div>
                            </div> */}
                        </Carousel>
                    </div>

                    <div className="slider_block2">
                        <Carousel axis='vertical' swipeable={false} stopOnHover={false} showThumbs={false} showArrows={false} showIndicators={false} renderArrowNext={() => false} renderArrowPrev={() => false} autoPlay={true} showStatus={false} infiniteLoop={true}>

                            <img src={doubleBottom} alt="" style={{ objectFit: 'contain' }} className="img-fluid2" />


                            <img src={tripleBottom} alt="" style={{ objectFit: 'contain' }} className="img-fluid2" />


                            <img src={wedge} style={{ objectFit: 'contain' }} alt="" className="img-fluid2" />
                            
                            <img src={broadeningBottom} style={{ objectFit: 'contain' }} alt="" className="img-fluid2" />

                        </Carousel>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Slider