import React from 'react';

const Footer = () => {
    return (
        <div className="container-fluid bg-dark mt-5">
            {/* <!-- footer up part --> */}
            <div className="container">
                <div className="row g-2">
                    <div className="col-xl-3 col-12">
                        <div className="p-3 bg-drak">
                            <a className="navbar-brand d-flex text-align-center" href="#">
                                <span className="ps-1 fs-3 text-light fw-bolder">Food Factory</span></a>
                            <p className="mt-4 text-light">With more than 15 years of experience we can proudly say that we are one of the best in business, a trusted supplier for more than 1000 companies....</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-6">
                        <div className="p-3 bg-dark text-light">
                            <h3>Company</h3>
                            <li className="list-unstyled"><a href="#">About us</a></li>
                            <li className="list-unstyled"><a href="#">Integrations</a></li>
                            <li className="list-unstyled"><a href="#">Pricing</a></li>
                            <li className="list-unstyled"><a href="#">Integrations</a></li>
                            <li className="list-unstyled"><a href="#"> Blog</a></li>
                        </div>
                    </div>
                    <div className="col-xl-2 col-6">
                        <div className="p-3  bg-dark text-light">
                            <h3>Community</h3>
                            <li className="list-unstyled"><a href="#">Our network </a></li>
                            <li className="list-unstyled"><a href="#">Latest articles</a></li>
                            <li className="list-unstyled"><a href="#">Events</a></li>
                            <li className="list-unstyled"><a href="#">Our network</a></li>
                        </div>
                    </div>
                    <div className="col-xl-2 col-12">
                        <div className="p-3  bg-dark text-light">
                            <h3>Legal</h3>
                            <li className="list-unstyled"><a href="#">Privacy Policy </a></li>
                            <li className="list-unstyled"><a href="#"> GDPR</a></li>
                            <li className="list-unstyled"><a href="#">Legal</a></li>
                            <li className="list-unstyled"><a href="#">Meeting Scheduler</a></li>
                        </div>
                    </div>
                    <div className="col-xl-3 col-12">
                        <div className="p-3  bg-dark text-light">
                            <h3>Contact</h3>
                            <li className="list-unstyled"><a href="#">More Informarion:+1234 568 963 </a></li>
                            <li className="list-unstyled"><a href="#">(9:AM to 8:PM BD)</a></li>
                            <li className="list-unstyled"><a href="#">Email:mdkzaman2022@gmail.com</a></li>
                        </div>
                        <div className="d-flex justify-content-around">
                            {/* <img src="./Image/Social-Icons/app-store.png" width="150px" className="img-fluid" alt="">
                            <img src="./Image/Social-Icons/google-play.png" width="150px" className="img-fluid" alt=""> */}
                        </div>
                    </div>
                </div>
            </div>

            <hr />
            {/* <!-- footer down part  --> */}
            <div className="container px-4 my-5">
                <div className="row gx-5 justify-content-lg-between align-items-center">
                    <div className="col-xl-4 col-md-6 col-12">
                        <div className="bg-dark text-center text-light">
                            <p>Copyrights ©2022 zaman. All rights reserved.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-12">
                        <div className="row gx-1 align-items-center justify-content-around">
                            <div className="col-xl-4 col-md-6 col-6 text-center">
                                <div className="">
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 col-6 text-center text-light">team of use</div>
                            <div className="col-xl-4 col-md-6  col-12 text-center text-light">Privacy policy</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;