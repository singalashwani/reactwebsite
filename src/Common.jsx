import React from 'react';
import homeimg from '../src/images/home.jpg';
import {NavLink} from 'react-router-dom';

let Common = (props) => {
    return (
        <>
            <section id="home" className="mt-2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 pt-5">
                            <h1>{props.valH1}</h1>
                            <p className="my-3">{props.valH2}</p>
                            <div className="mt-3">
                                <NavLink to={props.visit} className="btn-get-started">{props.btnVal}</NavLink>
                            </div>
                        </div>
                        <div className="col-md-6 header-img">
                            <img src={homeimg} alt="homeimg" className="img-fluid animated" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Common;