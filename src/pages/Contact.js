import React, { useState } from "react";

export default function Contact() {
  const [displayData, setDataContent] = useState(false);
  const [formData, setData] = useState({});
  const handleTextFields = (key, evnt) => {
    formData[key] = evnt.target.value;
    setData(formData);
  };
  const onSubmit = () => {
    if (Object.keys(formData).length > 0) {
      setDataContent(true);
    } else {
      alert("Please fill all the details");
    }
  };
  return (
    <div>
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>Contact</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>Contact Us</h6>
                  <hr />
                  <div className="form-group">
                    <label htmlFor="" className="mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="enter full name"
                      onChange={(e) => handleTextFields("name", e)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="" className="mb-1">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="enter email"
                      onChange={(e) => handleTextFields("email", e)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="" className="mb-1">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="enter phone number"
                      onChange={(e) => handleTextFields("phone", e)}
                    />
                  </div>{" "}
                  <div className="form-group">
                    <label htmlFor="" className="mb-1">
                      Address
                    </label>
                    <textarea
                      name=""
                      id=""
                      className="form-control"
                      rows="3"
                      placeholder="enter address"
                      onChange={(e) => handleTextFields("address", e)}
                    ></textarea>
                  </div>
                  <div className="form-group py-3">
                    <button
                      className="btn btn-primary shadow w-100"
                      type="button"
                      onClick={onSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
                {displayData ? (
                  <div className="col-md-6 border-start">
                    <h5 className="main-heading">Info</h5>
                    <div className="underline"></div>
                    <p>{formData.name || ""}</p>
                    <p>{formData.email || ""}</p>
                    <p>{formData.phone || ""}</p>
                    <p>{formData.address || ""}</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
