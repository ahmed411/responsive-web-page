import React from "react";
import { Link } from "react-router-dom";
import service1 from "../assets/images/s1.png";
import service2 from "../assets/images/s1.png";
import service3 from "../assets/images/s1.png";

export default function Services() {
  return (
    <section className="section border-top">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-5 text-center">
            <h3 className="main-heading">Our Services</h3>
            <div className="underline mx-auto"></div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <img
                src={service1}
                alt="Service 1"
                className="w-100 border-bottom"
              ></img>
              <div className="card-body">
                <h6>Services 1</h6>
                <div className="underline"></div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Link to="/services" className="bt btn-link">
                  read more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <img
                src={service2}
                alt="Service 2"
                className="w-100 border-bottom"
              ></img>
              <div className="card-body">
                <h6>Services 2</h6>
                <div className="underline"></div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Link to="/services" className="bt btn-link">
                  read more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <img
                src={service3}
                alt="Service 3"
                className="w-100 border-bottom"
              ></img>
              <div className="card-body">
                <h6>Services 3</h6>
                <div className="underline"></div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Link to="/services" className="bt btn-link">
                  read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
