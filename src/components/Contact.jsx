import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { APIENDPOINT } from '../../config';

function Contact() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const [emailSuccess, setEmailSuccess] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        } else setErrors({});

        // handle form submission
        var data = JSON.stringify({
            name,
            phone,
            email,
            subject,
            "msg": message
        });

        var config = {
            method: 'post',
            url: `${APIENDPOINT}/sendmail`,
            headers: {
                'Content-Type': 'application/json'
            },
            data
        };


        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                setEmailSuccess(true);
                // setName("");
                // setPhone("");
                // setEmail("");
                // setSubject("");
                // setMessage("");

                setTimeout(() => {
                    setEmailSuccess(false);
                }, 5000);
            })
            .catch(function (error) {
                // setName("");
                // setPhone("");
                // setEmail("");
                // setSubject("");
                // setMessage("");

                setEmailError(true);
                setTimeout(() => {
                    setEmailError(false);
                }, 5000);
                console.log(error);
            });
    };

    const validateForm = () => {
        const errors = {};
        if (!name) {
            errors.name = 'Name is required';
        }
        if (!email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid';
        }
        if (!phone) {
            errors.phone = 'Phone number is required';
            // } else if (!/^[0-9]+$/i.test(phone)) {
        } else if (!/^\d{10}$/.test(phone)) {
            errors.phone = 'Phone number is invalid';
        }
        if (!subject) {
            errors.subject = 'Subject is required';
        }
        if (!message) {
            errors.message = 'Message is required';
        }

        return errors;
    };


    return (
        <>
            <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="200" data-aos-once="true" className="rn-contact-area section-height">
                <div className="inner">
                    <h5 className="title">
                        Contact With Me
                    </h5>
                    <div className="contact-form-wrapper">
                        <div className="introduce">
                            <div className="row">

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="name">Your Name</label>
                                        <input className="form-control form-control-lg" name="name" id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                        {errors.name && <span className="error text-danger">{errors.name}</span>}
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input className="form-control" name="phone" id="phone" type="tel" maxLength="12" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                        {errors.phone && <span className="error text-danger">{errors.phone}</span>}
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input className="form-control form-control-sm" id="email" name="email" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="Invalid email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        {errors.email && <span className="error text-danger">{errors.email}</span>}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="subject">subject</label>
                                        <input className="form-control form-control-sm" id="subject" name="subject" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
                                        {errors.subject && <span className="error text-danger">{errors.subject}</span>}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="message">Your Message</label>
                                        <textarea name="message" id="message" cols="30" rows="10" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                        {errors.message && <span className="error text-danger">{errors.message}</span>}
                                    </div>
                                </div>
                                {emailSuccess && <div className='text-success mb-3'>Thank you for contacting!</div>}
                                {emailError && <div className='text-danger mb-3'>Error! Please try again. By that time you can connect with me on clicking on Hire Me.</div>}
                                <div className="col-lg-12" onClick={() => handleSubmit(event)}>
                                    <Link to="#" className="rn-btn">
                                        <span>SEND MESSAGE</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Contact