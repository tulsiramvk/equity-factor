import React from 'react'
import './About.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const About = () => {
    return (
        <>
            <div className="width-80 ml_auto">
                <div className="myrow" style={{ alignContent: 'center' }}>
                    <div className="about1 space2 bg_black">
                        <div className="myrow" style={{ justifyContent: 'space-evenly', marginTop: '70px' }}>
                            <div className='text-center zoom'>
                                <div>
                                    {/* <i class="bi bi-person-rolodex" style={{ color: '#FED51B', fontSize: '70px' }}></i> */}
                                    <span class="material-symbols-outlined" style={{ color: '#FED51B', fontSize: '80px', marginBottom: '10px' }}>
                                        engineering
                                    </span>
                                </div>
                                <h5 className='text-white'>Experienced <br /> Faculty</h5>
                            </div>
                            <div className='text-center zoom'>
                                <div>
                                    {/* <i class="bi bi-paypal" style={{ color: '#FED51B', fontSize: '70px' }}></i> */}
                                    <span class="material-symbols-outlined" style={{ color: '#FED51B', fontSize: '70px', marginBottom: '10px', marginTop: '10px' }}>
                                        live_tv
                                    </span>
                                </div>
                                <h5 className='text-white'>Practical<br /> Application</h5>
                            </div>
                        </div>
                        <div className="myrow" style={{ justifyContent: 'space-evenly', marginTop: '70px' }}>
                            <div className='text-center zoom'>
                                <div>
                                    {/* <i class="bi bi-heart" style={{ color: '#FED51B', fontSize: '70px' }}></i> */}
                                    <span class="material-symbols-outlined" style={{ color: '#FED51B', fontSize: '80px', marginBottom: '10px' }}>
                                        psychology
                                    </span>
                                </div>
                                <h5 className='text-white'>Psychological <br />Training</h5>
                            </div>
                            <div className='text-center zoom'>
                                <div>
                                    {/* <i class="bi bi-wallet2" style={{ color: '#FED51B', fontSize: '70px' }}></i> */}
                                    <span class="material-symbols-outlined" style={{ color: '#FED51B', fontSize: '80px', marginBottom: '10px' }}>
                                        stress_management
                                    </span>
                                </div>
                                <h5 className='text-white'>Risk <br />Management</h5>
                            </div>
                        </div>

                    </div>
                    <div className="about2 space2 bg_black">
                        <div style={{ padding: '0px 20px' }}>
                            <div className="title2" style={{ color: '#FED51B', fontSize: '25px', marginBottom: '0px', lineHeight: '40px' }}>TRADER'S TRAINING ACADEMY</div>
                            <div className="title2 text-white" style={{}}>EQUITYFACTOR</div>
                            <div className="width_80">
                                <p className="c_content text-white">
                                    Welcome to the Trader's Training Academy! We are an institution dedicated to theoretical and practical training in the field of technical analysis. Our institute strives to equip traders with the knowledge and skills they need to successfully navigate the financial markets.
                                    we believe that technical analysis is an essential tool for traders and investors to make informed decisions about buying, selling, and managing their investments.
                                </p>
                                <p className="c_content text-white">
                                    Equity Factor was started in 2014 with a vision and mission to create traders by education who understand when to trade,when not to trade,how to trade.
                                </p>
                                <div className="mt-5">
                                    <a href='/#contact' className="button_outline_white">
                                        REGISTER NOW
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="fact_wrapper">
                <div className="width_80 m-auto text-center">
                    <p style={{ fontSize: '18px', fontWeight: 600, color: "#202020" }}>Unlocking the Power of Technical Analysis since 2009</p>
                    <div className="title2">
                        STATS & FACTS
                    </div>
                    <p className="fact_content">
                        At Equityfactor, we are committed to empowering you with the core concept of Technical Analysis which helps you to understand how to trade, when to trade and when not to trade?
                    </p>

                    <div className="myrow mt-5" style={{ justifyContent: 'space-evenly' }}>
                        <div style={{ width: 200, height: 200, marginTop: '20px', marginBottom: '50px' }}>
                            <CircularProgressbar styles={buildStyles({
                                textColor: '#202020',
                                pathColor: "#202020",
                                trailColor: "#E5E5E5",
                                textSize: 16
                            })} value={100} text={`2009`} />
                            <h5 className='py-3' style={{ textTransform: 'uppercase', fontFamily: "'Oswald', sans-serif" }}>Since</h5>
                        </div>
                        <div style={{ width: 200, height: 200, marginTop: '20px', marginBottom: '50px' }}>
                            <CircularProgressbar styles={buildStyles({
                                textColor: '#202020',
                                pathColor: "#202020",
                                trailColor: "#E5E5E5",
                                textSize: 16
                            })} value={100} text={`2K+`} />
                            <h5 className='py-3' style={{ textTransform: 'uppercase', fontFamily: "'Oswald', sans-serif" }}>Trained Traders</h5>
                        </div>
                        <div style={{ width: 200, height: 200, marginTop: '20px', marginBottom: '50px' }}>
                            <CircularProgressbar styles={buildStyles({
                                textColor: '#202020',
                                pathColor: "#202020",
                                trailColor: "#E5E5E5",
                                textSize: 16
                            })} value={100} text={`16+`} />
                            <h5 className='py-3' style={{ textTransform: 'uppercase', fontFamily: "'Oswald', sans-serif" }}>Years Experience</h5>
                        </div>

                    </div>

                </div>
                <div id="courses"></div>
            </div>
        </>
    )
}

export default About