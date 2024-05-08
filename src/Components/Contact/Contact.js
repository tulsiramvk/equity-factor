import React, { useState, useEffect } from 'react'
import './Contact.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import { url } from '../../Export'

const Contact = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })

    const handleSubmit = () => {
        if (state.name.length === 0) {
            Swal.fire(
                'Error',
                'Name Required.',
                'error'
            )
        } else if (state.phone.length !== 10) {
            Swal.fire(
                'Error',
                'Enter Valid Contact Number.',
                'error'
            )
        }
        else if (state.email.length === 0) {
            Swal.fire(
                'Error',
                'Email Required.',
                'error'
            )
        } else {
            if (state.message.length === 0) {
                let data = {
                    name: state.name,
                    email: state.email,
                    phone: state.phone,
                    message: state.message
                }
                axios.post(url + 'api/add-enquiry/', data)
                    .then(res => {
                        setState({
                            name: '',
                            email: '',
                            phone: '',
                            message: ''
                        })
                        Swal.fire(
                            'Thank You',
                            'We will get back to you soon.',
                            'success'
                        )
                    })
            } else {
                axios.post(url + 'api/add-enquiry/', state)
                    .then(res => {
                        setState({
                            name: '',
                            email: '',
                            phone: '',
                            message: ''
                        })
                        Swal.fire(
                            'Thank You',
                            'We will get back to you soon.',
                            'success'
                        )
                    })
            }

        }
    }
    return (
        <>
            <div className="width_80 m-auto">
                <div className="myrow justify_space_between space">

                    <div className="c_block">
                        <h1 className="title">GET IN TOUCH</h1>

                        <div className="myrow justify_space_between">
                            <div className="input_block">
                                <div className="input_wrapper">
                                    <input type="text" value={state.name} onChange={(e)=>setState({...state,name:e.target.value})} placeholder='Your Name' className='input' />
                                </div>
                                <div className="input_wrapper">
                                    <input type="text" value={state.email} onChange={(e)=>setState({...state,email:e.target.value})} placeholder='Email Address' className='input' />
                                </div>
                                <div className="input_wrapper">
                                    <input type="text" value={state.phone} onChange={(e)=>setState({...state,phone:e.target.value})} placeholder='Contact' className='input' />
                                </div>
                            </div>

                            <div className="input_block">
                                <div className="input_wrapper">
                                    <textarea rows="7" value={state.message} onChange={(e)=>setState({...state,message:e.target.value})} placeholder='Your Message' className="input"></textarea>
                                </div>
                            </div>

                            <div className="button_solid_yellow w-100 mt-4" onClick={handleSubmit}>
                                Send Message
                            </div>
                        </div>
                    </div>
                    {/* ------------------ */}
                    <div className="c_block">
                        <h1 className="title">OUR LOCATION</h1>

                        <p className='c_content pb-4'>We understand that making important decisions in trading can be challenging, and we are here to help you.</p>

                        <div className="d-flex align_center" style={{ marginTop: '20px' }}>
                            <div style={{ marginRight: '30px' }}>
                                <i className="bi bi-geo" style={{ fontSize: '30px' }}></i>
                            </div>
                            <div className='c_content'>
                            Plot No. 83, Shreenivas Tower M.P Nagar Zone II, Bhopal, Madhya Pradesh 462011
                            </div>
                        </div>
                        <div className="d-flex align_center" style={{ marginTop: '20px' }}>
                            <div style={{ marginRight: '30px' }}>
                                <i className="bi bi-telephone" style={{ fontSize: '30px' }}></i>
                            </div>
                            <div className='c_content'>
                                <a href="tel:+918827979008" className='c_content'>+91-8827979008</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                                <a href="tel:+919993906449" className='c_content'>+91-9993906449</a>
                            </div>
                        </div>
                        <div className="d-flex align_center" style={{ marginTop: '20px' }}>
                            <div style={{ marginRight: '30px' }}>
                                <i className="bi bi-send" style={{ fontSize: '30px' }}></i>
                            </div>
                            <div className='c_content'>
                                <a href="mailto:info.equityfactor@gmail.com" className='c_content'>info.equityfactor@gmail.com</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Contact