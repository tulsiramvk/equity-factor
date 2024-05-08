import React from 'react'
import './Clients.css'
import thumbnail from '../../Images/test1.jpg'
import t from '../../Images/t.jpg'
import t1 from '../../Images/t1.jpg'
import t2 from '../../Images/t2.jpg'

const Clients = () => {
    return (
        <>
            <div className="width-80 ml_auto " id='clients'>
                <div className="bg_black client_wrapper">
                    <div className="myrow align_center">
                        <div className="client_block1">
                            <h1 className="title2 text-white">
                                SATISFIED TRADERS
                            </h1>
                            <p className='c_content text-white'>
                                We are dedicated to delivering excellence in everything we do, and we are incredibly grateful for the trust our trainee place in us.
                            </p>
                        </div>

                        <div className="client_block2">
                            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">

                                    <div class="carousel-item active" data-bs-interval="3000">
                                        <h1 className="title2 text-white mb-2">
                                            <i class="bi bi-quote"></i>
                                        </h1>
                                        <p class="c_content text-white">
                                            Enrolling in the stock market technical analysis training was one of the best decisions I've made. From day one, Atish sir guided us from the very basics to advanced concepts in such an interactive and engaging way. His expertise and teaching style made learning about the market an enjoyable experience.
                                        </p>
                                        <div>
                                            <img src={t} className='client_ico' alt="" />
                                        </div>

                                        <h4 className='text-white'>Pihu Sharma</h4>
                                    </div>

                                    <div class="carousel-item" data-bs-interval="3000">
                                        <h1 className="title2 text-white mb-2">
                                            <i class="bi bi-quote"></i>
                                        </h1>
                                        <p class="c_content text-white">
                                        I wanted to enter stock market for very long but did not know how. I did my Technical Analysis program with Equity Factor. I am now a qualified trader with Knowledge of Technical Research and trading has become my profession.
                                        </p>
                                        <div>
                                            <img src={t1} className='client_ico' alt="" />
                                        </div>

                                        <h4 className='text-white' style={{paddingBottom:'25px'}}>Siddharth Kekre</h4>
                                    </div>

                                    <div class="carousel-item" data-bs-interval="3000">
                                        <h1 className="title2 text-white mb-2">
                                            <i class="bi bi-quote"></i>
                                        </h1>
                                        <p class="c_content text-white">
                                            I have done Technical Analysis program with Equity factor in January 2023.The program has
                                            helped me in identifying scrips for trading with proper Target and Stop loss.Their Trailing Stop loss strategy has helped me create wealth.I recommend all traders to go for this highly recommended program.
                                        </p>
                                        <div>
                                            <img src={t2} className='client_ico' alt="" />
                                        </div>

                                        <h4 className='text-white'>Kuldeep Kaithal</h4>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clients