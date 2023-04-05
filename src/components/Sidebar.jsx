import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'


function Sidebar() {
    const downloadDocx = () => {
        const link = document.createElement('a');
        link.href = '/assets/Karan Resume.docx';
        // link.download = 'filename.docx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
            <div className="col-lg-6">
                <div className="d-flex flex-wrap align-content-start h-100">
                    <div className="position-sticky sticky-top rbt-sticky-top-adjust-two">
                        <div className="banner-details-wrapper-sticky slide">
                            <div className="thumbnail">
                                <img src="./assets/images/slider/banner-8.jpeg" alt="Personal Portfolio" />
                            </div>
                            <div className="banner-title-area pt--30">
                                <h1 className="title">Hi, I’m <span>Karan Tekwani</span><br />
                                </h1>
                                <h3 style={{ color: 'black' }}>
                                    <span className="span">
                                        {/* SoftWare Developer */}
                                        <Typewriter
                                            words={['Developer!', 'Freelancer!', 'Software Engineer!', 'DevOps Expert!', 'Web Developer!', 'Professional Coder!']}
                                            loop={true}
                                            cursor
                                            cursorStyle='|'
                                            typeSpeed={120}
                                            deleteSpeed={50}
                                            delaySpeed={1000}

                                        />
                                    </span>
                                </h3>
                                <p className="disc">I am a skilled Full-Stack Developer and DevOps Expert based in India, who possesses a strong passion for creating robust and reliable applications. My coding philosophy emphasizes the importance of maintaining clean code that is easy to understand and modify, resulting in a more maintainable software solution.</p>
                                <p>Critical thinker | Leader | Gentle | 	Self-confident  | Team Player  </p>
                            </div>
                            <div className="button-group text-center text-md-start pt--20 pt_md--40 pt_sm--40">
                                {/* <div className="button-group text-center text-md-start pt--60 pt_md--40 pt_sm--40"> */}
                                <Link className="rn-btn" to="#" onClick={downloadDocx}><span>Download My CV</span></Link>
                                <Link className="rn-btn" to="https://www.upwork.com/freelancers/~019130483bb4304c90" target="_blank" rel="noopener noreferrer"><span>Hire Me</span></Link>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Sidebar