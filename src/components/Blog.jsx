import React from 'react'

function Blog() {
    return (
        <>
            <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="200" data-aos-once="true" className="rn-blog-area single-card-sticky section-height">
                <div className="inner">
                    <h5 className="title">
                        My Blog
                    </h5>
                    <ul className="card-list">
                        <li><a href="#">Ervice refers to quality<i data-feather="arrow-right"></i></a></li>
                        <li><a href="#">Service is intangible in nature<i data-feather="arrow-right"></i></a></li>
                        <li><a href="#">Occurs frequently in retailing<i data-feather="arrow-right"></i></a></li>
                        <li><a href="#">Provided to a customer.<i data-feather="arrow-right"></i></a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Blog