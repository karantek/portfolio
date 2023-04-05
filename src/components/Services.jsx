import React from 'react'
import { Link } from 'react-router-dom'

function Services() {
    return (
        <>
            <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="200" data-aos-once="true" className="rn-skill-area single-card-sticky section-height">
                <div className="inner">
                    <h5 className="title">
                        My Services
                    </h5>
                    <ul className="card-list">
                        <li><Link href="#">Node.js Backend Developement <i data-feather="arrow-right"></i></Link></li>
                        <li><Link href="#">React.js/Next.js Frontend Development<i data-feather="arrow-right"></i></Link></li>
                        <li><Link href="#">Web Development<i data-feather="arrow-right"></i></Link></li>
                        <li><Link href="#">Azure DevOps Service<i data-feather="arrow-right"></i></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Services