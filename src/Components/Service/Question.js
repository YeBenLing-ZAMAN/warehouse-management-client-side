import React from 'react';
import qus from '../../Image/qusandAns/qus.jpg'

const Question = () => {
    return (
        <section className="container-fluid my-5">
            <h1 className="fw-bolder text-center my-5">FREQUENTLY ASKED QUSTION</h1>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col d-flex align-items-center order-2 order-sm-1">
                        <div className="w-100">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true"
                                            aria-controls="collapseOne">
                                            Do you charge separately for your various storehouse services?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show"
                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        We are a grocery factory sales outlet. We offer a huge range of food and household products at factory direct discount prices. Our great locations and ample customer parking makes it simple to visit and score a bargain. We stock a wide range of the big brands you know and love at massively reduced prices (Including frozen and chilled foods). Make sure to visit Food Factory Sales before your supermarket grocery shopping to take advantage of our many specials and fantastic range. You will be amazed by how much you will save! Food Factory Sales Bayswater is open 7 days per week. Monday to Friday 9am til 5.30pm. Saturday 9am til 5pm and Sunday 10am til 4pm.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                            aria-expanded="false" aria-controls="collapseTwo">
                                            What services Transport we are provided?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        A warehousing firm can also offer transport services to its clients. Depending on a client’s needs, this could include ocean, rail, road, or air transport services. Some of the companies that offer this service allow their clients to track movement of goods from one location to another in real¬-time. This service can make the difference between success and failure of a small business or startup.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                            aria-expanded="false" aria-controls="collapseFive">
                                            Which of the following are called food factories of the plants??
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse"
                                        aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        The part of the plant which produces food is a leaf. Leaves prepare food by a process called photosynthesis. In this process, food is produced by utilizing water and carbon dioxide in the presence of sunlight. Therefore, leaves are called the food factories of the plants.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                            aria-expanded="false" aria-controls="collapseThree">
                                            how we provided Transloading system?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse"
                                        aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        Transloading is the transfer of goods from one mode of transport to another, for instance, the transfer of goods from a truck to an airplane. Some warehouse firms provide this service to their clients.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                            aria-expanded="false" aria-controls="collapseFour">
                                            Inventory Control
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse"
                                        aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        Businesses can use warehousing services to control inventory. For example, a company can utilize warehouse cycle counts to analyze delivery of goods to consumers. Armed with this information, the same company could take steps to improve its cycle count. Inventory control also makes it easy for companies to eliminate and reduce receiving errors. A good example of a receiving error is any product that employees receive and fail to label. If another employee is sent to retrieve the same product, he/she may pick a different one.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col order-1 order-sm-2">
                        <div className='mx-auto'>
                            <img src={qus} className="img-fluid w-100 rounded rounded-2 shadow-lg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Question;