import React from 'react';

function Hero() {
    return (
        <section className="container-fluid" id="supportHero" style={{ backgroundColor: "#387ed1", color: "white" }}>
            <div className="p-5" id="supportWrapper">
                <div className="d-flex justify-content-between mx-5">
                    <h4>Support Portal</h4>
                    <a href="" style={{ color: "white" }}>Track Tickets</a>
                </div>
                <div className="row p-5 m-3">
                    <div className="col-6 p-3">
                        <h1 className="fs-3 mb-4">
                            Search for an answer or browse help topics to create a ticket
                        </h1>
                        <input
                            placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
                            className="form-control mb-3 p-3"
                            style={{ borderRadius: "5px" }}
                        />
                        <br />
                        <a href="" style={{ color: "white", marginRight: "15px" }}>Track account opening</a>
                        <a href="" style={{ color: "white", marginRight: "15px" }}>Track segment activation</a>
                        <a href="" style={{ color: "white", marginRight: "15px" }}>Intraday margins</a>
                        <br />
                        <a href="" style={{ color: "white" }}>Kite user manual</a>
                    </div>
                    <div className="col-6 p-3">
                        <h1 className="fs-3">Featured</h1>
                        <ol>
                            <li className="mb-2">
                                <a href="" style={{ color: "white" }}>Current Takeovers and Delisting - January 2024</a>
                            </li>
                            <li>
                                <a href="" style={{ color: "white" }}>Latest Intraday leverages - MIS & CO</a>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;