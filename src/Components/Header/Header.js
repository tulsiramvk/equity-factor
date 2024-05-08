import React, { useState, useEffect } from 'react'
import logo from '../../Images/logo-black.png'
import logo2 from '../../Images/logo-white.png'
import './Header.css'
import {facebook,instagram, linkedin, twitter} from '../../Export'

const Header = () => {
    const [isSticky, setSticky] = useState(false);
    const [isSticky2, setSticky2] = useState(false);

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    const [scrollPosition2, setScrollPosition2] = useState(0);
    const handleScroll2 = () => {
        const position = window.pageYOffset;
        setScrollPosition2(position);
    };

    useEffect(() => {
        if (scrollPosition > 225) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }, [scrollPosition])

    useEffect(() => {

        if (scrollPosition2 > 62) {
            setSticky2(true)
        } else {
            setSticky2(false)
        }
    }, [scrollPosition2])


    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll2, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll2);
        };
    }, [])
    return (
        <>
            <div className="width-80 ml_auto ">
                <div className="bg_black text-center" style={{ padding: '7px',color:'#FED51B',letterSpacing:'1px',wordSpacing:'1px' }}>
                    <span style={{fontWeight:'',fontFamily:"'Oswald', sans-serif"}}>TRADER'S TRAINING ACADEMY</span>
                </div>
                <div className="myrow justify_space_between nav_wrapper align_center">
                    <div>
                        <img src={logo} width={'100px'} alt="" />
                    </div>
                    <div className='nav_hide'>
                        <div className="myrow">
                            <a href="/#home">
                                <div className='nav_item'>
                                    <span className='nav_number'>01 . </span>
                                    HOME
                                </div>
                            </a>
                            <a href="/#about">
                                <div className='nav_item'>
                                    <span className='nav_number'>02 . </span>
                                    ABOUT
                                </div>
                            </a>
                            <a href="/#courses">
                                <div className='nav_item'>
                                    <span className='nav_number'>03 . </span>
                                    COURSE
                                </div>
                            </a>
                            <a href="/#clients">
                                <div className='nav_item'>
                                    <span className='nav_number'>04 . </span>
                                    CLIENTS
                                </div>
                            </a>
                            <a href="/#contact">
                                <div className='nav_item'>
                                    <span className='nav_number'>05 . </span>
                                    CONTACT
                                </div>
                            </a>
                        </div>
                    </div>

                    <div type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
                        <i class="bi bi-list-nested menu_icon"></i>
                    </div>
                </div>
            </div>

            {/* {isSticky ? */}
            <div className={isSticky ? "fixed_header" : 'not_header'}>
                <div className="bg_yellow" style={{ minHeight: '25px' }}>
                </div>
                <div className="width-80 ml_auto">
                    <div className="myrow justify_space_between nav_wrapper align_center">
                        <div>
                            <img src={logo} width={'90px'} alt="" />
                        </div>
                        <div className='nav_hide'>
                            <div className="myrow">
                                <a href="/#home">
                                    <div className='nav_item'>
                                        <span className='nav_number'>01 . </span>
                                        HOME
                                    </div>
                                </a>
                                <a href="/#about">
                                    <div className='nav_item'>
                                        <span className='nav_number'>02 . </span>
                                        ABOUT
                                    </div>
                                </a>
                                <a href="/#courses">
                                    <div className='nav_item'>
                                        <span className='nav_number'>03 . </span>
                                        COURSE
                                    </div>
                                </a>
                                <a href="/#clients">
                                    <div className='nav_item'>
                                        <span className='nav_number'>04 . </span>
                                        CLIENTS
                                    </div>
                                </a>
                                <a href="/#contact">
                                    <div className='nav_item'>
                                        <span className='nav_number'>05 . </span>
                                        CONTACT
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
                            <i class="bi bi-list-nested menu_icon"></i>
                        </div>
                    </div>
                </div>
            </div>
            {/* : null} */}

            {/* ----------------------------------Side Nav-------------------------------------- */}

            <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                <div className="myrow" style={{ justifyContent: 'flex-end' }}>
                    <i className='bi bi-x closeBtn' type='button' data-bs-dismiss="offcanvas" aria-label="Close"></i>
                </div>
                <div className="text-center">
                    <img src={logo2} width={'100px'} alt="" />
                </div>

                <div className="myrow justify_space_between align_center">
                    <div className="blocksidenav">
                        <a href="/#home">
                            <div className='nav_item2' data-bs-dismiss="offcanvas" aria-label="Close">
                                <span className='nav_number2'>01 . </span>
                                HOME
                            </div>
                        </a>
                        <a href="/#about">
                            <div className='nav_item2' data-bs-dismiss="offcanvas" aria-label="Close">
                                <span className='nav_number2'>02 . </span>
                                ABOUT
                            </div>
                        </a>
                        <a href="/#courses" >
                            <div className='nav_item2' data-bs-dismiss="offcanvas" aria-label="Close">
                                <span className='nav_number2'>03 . </span>
                                COURSE
                            </div>
                        </a>
                        <a href="/#clients">
                            <div className='nav_item2' data-bs-dismiss="offcanvas" aria-label="Close">
                                <span className='nav_number2'>04 . </span>
                                CLIENTS
                            </div>
                        </a>
                        <a href="/#contact" >
                            <div className='nav_item2' data-bs-dismiss="offcanvas" aria-label="Close">
                                <span className='nav_number2'>05 . </span>
                                CONTACT
                            </div>
                        </a>
                    </div>
                    <div className="blocksidenav">
                        <div className="sidenav_content">
                        +91-96440 00494
                        </div>
                        <div className="sidenav_content">
                            contact@equityfactor.in
                        </div>

                        <div className='my-3 mt-5'>
                            <div className="">
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
                        <div className="sidenav_content mt-3">
                            © 2023 EquityFactor. All Rights Reserved
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Header