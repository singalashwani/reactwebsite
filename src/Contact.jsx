import React, { useState } from "react";

let Contact = () => {
    
    let [data, setData] = useState({
        fname: '',
        phone: '',
        email: '',
        message: ''
    });

    let inputEvent = (event) => {
        console.log(event.target.value);
        const {name, value} = event.target;

        setData((prevValues) => {
            return {...prevValues,
            [name]: value}
        });
    }

    let onSubmit = (event) => {
        event.preventDefault();
        alert(`form submitted. ${data.fname} - ${data.phone} - ${data.email} - ${data.message}`);
    };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h1 className="text-center">Contact us</h1>
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="fname"
                  placeholder="Enter Full Name"
                  autoComplete="off"
                  onChange={inputEvent}
                  value={data.fname}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="phone"
                  placeholder="Enter phone number"
                  autoComplete="off"
                  onChange={inputEvent}
                  value={data.phone}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter Email address"
                  autoComplete="off"
                  onChange={inputEvent}
                  value={data.email}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  placeholder="Enter message"
                  rows="3"
                  onChange={inputEvent}
                  value={data.message}
                />
              </div>
                <div>
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
