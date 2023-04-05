import React, { useState, useEffect, lazy, Suspense } from 'react'
const Testimonials = lazy(() => import("./Testimonials.jsx"));
const Blog = lazy(() => import("./Blog.jsx"));
const Portfolio = lazy(() => import("./Portfolio.jsx"));
const Services = lazy(() => import("./Services.jsx"));
const Skills = lazy(() => import("./Skills.jsx"));
const About = lazy(() => import("./About.jsx"));
const Contact = lazy(() => import("./Contact.jsx"));
const Sidebar = lazy(() => import("./Sidebar.jsx"));
const Certification = lazy(() => import("./Certification.jsx"));
import Loader from './Loader.jsx';

function Home() {
    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <Suspense fallback={<Loader />}>
            <div className="template-color-1 home-sticky spybody white-version" data-spy="scroll" data-target=".navbar-example2" data-offset="150">
                <main className="main-page-wrapper">
                    <div className="rn-slider-area">
                        <div className="container">
                            <div className="row row--30 pt--100 pt_sm--50">
                                <Sidebar />
                                <div className="col-lg-6">
                                    <div className="sticky-home-wrapper">
                                        <About />
                                        <Skills />
                                        <Services />
                                        <Portfolio />
                                        {/* <Blog /> */}
                                        <Certification />
                                        {/* <Testimonials /> */}
                                        <Contact />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="backto-top">
                        <div onClick={handleScroll}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                        </div>
                    </div>
                </main >
            </div >
        </Suspense>
    )
}

export default Home