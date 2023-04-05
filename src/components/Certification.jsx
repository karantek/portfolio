import React from 'react'
import { Link } from 'react-router-dom'

function Certification() {
    return (
        <>
            <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="200" data-aos-once="true" className="rn-blog-area single-card-sticky section-height">
                <div className="inner">
                    <h5 className="title">
                        My Certification
                    </h5>
                    <ul className="card-list">
                        <li><Link to="https://www.credly.com/badges/9ece9ea8-f42b-4470-a763-dc508b591929/linked_in_profile" target="_blank" rel="noopener noreferrer">Azure Certified DevOps Engineer<i data-feather="arrow-right"></i></Link></li>
                        <li><Link to="https://www.credly.com/badges/a806c881-bda9-4602-9594-f5694c62e1c2/linked_in_profile" target="_blank" rel="noopener noreferrer">Azure AZ-204 (Developing Solutions for Microsoft Azure)<i data-feather="arrow-right"></i></Link></li>
                        <li><Link to="https://www.credly.com/badges/5e1b68b9-98eb-4c50-935f-9f568103c4d5?source=linked_in_profile" target="_blank" rel="noopener noreferrer">Azure AZ-400 (Designing and Implementing Microsoft DevOps Solutions)<i data-feather="arrow-right"></i></Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Certification