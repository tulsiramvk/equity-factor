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

            <div className="width-80 ml_auto mb-3">
                <div className="myrow" style={{ alignContent: 'center' }}>
                    <div className="about1 space2 bg_black">
                        <div style={{ padding: '0px 25px' }}>
                            <div className="title2" style={{ color: '#FED51B', fontSize: '25px', marginBottom: '0px', lineHeight: '40px' }}>TRAINER'S PROFILE</div>
                            <div className="title2 text-white" style={{}}>ATISH SHAKERGAYE</div>
                            <div className="">
                                <p className="c_content text-white">
                                    Driven by a lifelong passion for the financial markets <span className="text-warning">since 2008</span>, I've dedicated over a decade to mastering the art of market research and technical analysis. As a <span className="text-warning">SEBI Registered (INH000006086) Research Analyst</span>, I empower aspiring traders to unlock the core concepts of technical analysis, become professional market participants, and navigate the markets with confidence. With a portfolio of prestigious certifications, including NISM, NSE, and BSE credentials, I bring a wealth of expertise to the table. Whether you're a beginner or a seasoned investor, I'm here to guide you toward becoming a professional trader. Join me on an exhilarating journey to master the art of trading by understanding the core concept of technical analysis.
                                </p>
                                <p className="c_content text-white">
                                    My professional experience includes positions in investment banking, asset management, and financial consulting, giving me a well-rounded view on the business. I've also been recognized for my ability to demystify complicated financial topics and successfully explain them to a variety of groups.
                                </p>
                                <p className="c_content text-white">
                                    Click below icon to view linkedin profile.
                                </p>
                                <a href={'https://linkedin.com/in/atish-shakergaye-5296542bb'} target='blank' className='text-white'>
                                  <i className="bi bi-linkedin text-warning" style={{fontSize:'20px'}}></i>
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="about2 space2 bg_black">
                        <div style={{ padding: '0px 20px' }}>
                            <div className='text-center mb-3'>
                                <img src="https://api.scoutstack.co.in/media/sstr/scoutstack/qrcodes/200cb02d1c5c477a93227fbc6cc371ed.jpg" style={{ width: '200px', height: '190px', objectFit: 'cover', borderRadius: '12px', objectPosition: 'left' }} alt="" />
                            </div>

                            <div className="title2" style={{ color: '#FED51B', fontSize: '25px', marginBottom: '0px', lineHeight: '40px' }}>MY CERTIFICATIONS</div>
                            <ul className='mt-3'>
                                <li className="c_content mb-2 text-white">Certificate of Registration As Research Analyst, Jul 2018</li>
                                <li className="c_content mb-2 text-white">NISM-Series-X-A: Investment Adviser (Level 1) Certification Examination, Aug 2016</li>
                                <li className="c_content mb-2 text-white">NSE Certified Market Professional (NCMP), Apr 2010</li>
                                <li className="c_content mb-2 text-white">Commodities Market Module, Mar 2010</li>
                                <li className="c_content mb-2 text-white">Equity Derivatives: A Beginners’ Module, Mar 2010</li>
                                <li className="c_content mb-2 text-white">Surveillance in Stock on various position Module, Mar 2010</li>
                                <li className="c_content mb-2 text-white">BSE’s Certification On Securities Markets, Mar 2008</li>
                                <li className="c_content mb-2 text-white">Capital Market (Dealers) Module, Mar 2008</li>
                                <li className="c_content mb-2 text-white">BSE’s Certification for Derivatives Exchange, Nov 2007</li>
                                <li className="c_content mb-2 text-white">Derivatives Market (Dealers) Module, Nov 2007</li>
                                <li className="c_content mb-2 text-white">Financial Market: A Beginners’ Module, Aug 2007</li>
                                <li className="c_content mb-2 text-white">IRDA Certification (Insurance Agent Exam)</li>
                                <li className="c_content mb-2 text-white">NISM Series-XV: Research Analyst Certification Examination</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About