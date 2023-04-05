import React from 'react'
import { Link } from 'react-router-dom'

function Portfolio() {
    return (
        <>
            <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="200" data-aos-once="true" className="rn-portfolio-area single-card-sticky section-height">
                <div className="inner">
                    <h5 className="title">
                        My Portfolio
                    </h5>
                    <ul className="card-list">
                        <li><Link href="#">Inventory Management System<i data-feather="arrow-right"></i></Link></li>
                        <li><Link href="#">E-commerce<i data-feather="arrow-right"></i></Link></li>
                        <li><Link href="#">Cloud DevOps Expert<i data-feather="arrow-right"></i></Link></li>
                        {/* <li><Link href="#">Service to a customer.<i data-feather="arrow-right"></i></Link></li> */}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Portfolio