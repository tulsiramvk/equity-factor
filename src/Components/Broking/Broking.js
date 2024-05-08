import React from 'react'
import './Broking.css'
import s from '../../Images/swastika.png'
import m from '../../Images/motial.png'

const Broking = () => {
    return (
        <>
            <div className="fact_wrapper">
                <div className="width_80 m-auto text-center">

                    <div className="title2 mb-0">
                        OPEN FREE DEMAT ACCOUNT
                    </div>
                    <p className="fact_content mb-5">
                    Open your free Demat Account with our broking partners.
                    </p>
                    <div className="myrow">
                        <div className="brokingcard">
                            <img src={s} alt="" className="img-fluid" />
                            <p className="c_content mt-3">
                                Swastika Investmart Limited
                            </p>
                            <div className="mt-5 mb-3">
                                <a href="https://kyc.swastika.co.in/customer/login/55DFF90898" target='blank' className="button_solid_yellow">OPEN NOW</a>
                            </div>
                        </div>

                        <div className="brokingcard">
                            <img src={m} alt="" className="img-fluid" />
                            <p className="c_content mt-3">
                                Motilal Oswal Financial Services
                            </p>
                            <div className="mt-5 mb-3">
                                <a href="http://mosl.co/JllaKlaOHo" target='blank' className="button_solid_yellow">OPEN NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
            <div id="contact"></div>
            </div>
        </>
    )
}

export default Broking