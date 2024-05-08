import React from 'react'
import './Footer.css'
import { facebook, instagram, linkedin, twitter } from '../../Export'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="footer bg_black">
                <div className="myrow justify_space_between text-white align_center">
                    <div className='my-3'>
                        <div className="myrow">
                            <a href={facebook} target='blank' className='footer_ico'>
                                <i class="bi bi-meta"></i>
                            </a>
                            <a href={twitter} target='blank' className='footer_ico'>
                                <i class="bi bi-twitter"></i>
                            </a>
                            <a href={linkedin} target='blank' className='footer_ico'>
                                <i class="bi bi-linkedin"></i>
                            </a>
                            <a href={instagram} target='blank' className='footer_ico'>
                                <i class="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className='my-3'>
                        © 2023 EquityFactor. All Rights Reserved
                    </div>
                </div>

                <div className='myrow other_link'>
                    <Link to={'/privacy-policy'} className='c_content2' style={{paddingRight:'20px'}}>Privacy Policy</Link>
                    <Link to={'/terms-conditions'} className='c_content2' style={{paddingLeft:'20px',borderRight:'0px solid transparent'}}>Terms & Conditions</Link>
                </div>
            </div>


        </>
    )
}

export default Footer