import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
          <div className="container">
            <a href="#" className="navbar-brand">
              Zenator Users Guide
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navmenu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navmenu">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a href="#learn" className="nav-link">
                    What You'll Learn
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#questions" className="nav-link">
                    Questions
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#instructors" className="nav-link">
                    Instructors
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
          <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between">
              <div>
                <h1>
                  Become <span className="text-warning"> Confused </span>
                </h1>
                <p className="lead my-4">
                  We focus on teaching our students the fundamentals of the
                  latest and greatest of Zenator to prepare them for long nights
                  and weekends in the office!
                </p>
                <button
                  className="btn btn-primary btn-lg"
                  data-bs-toggle="modal"
                  data-bs-target="#enroll"
                >
                  Start The Enrollment
                </button>
              </div>
              <img
                className="img-fluid w-50 d-none d-sm-block"
                src="https://thumbs.dreamstime.com/b/confused-person-question-marks-businessman-cardboard-head-sitting-office-looks-background-55325678.jpg"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="p-5">
          <div className="container">
            <div className="row text-center g-4">
              <div className="col-md">
                <div className="card bg-dark text-light">
                  <div className="card-body text-center">
                    <div className="h1 mb-3">
                      <i className="bi bi-laptop"></i>
                    </div>
                    <h3 className="card-title mb-3">Virtual</h3>
                    <p className="card-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Iure, quas quidem possimus dolorum esse eligendi?
                    </p>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="card bg-secondary text-light">
                  <div className="card-body text-center">
                    <div className="h1 mb-3">
                      <i className="bi bi-person-square"></i>
                    </div>
                    <h3 className="card-title mb-3">Hybrid</h3>
                    <p className="card-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Iure, quas quidem possimus dolorum esse eligendi?
                    </p>
                    <a href="#" className="btn btn-dark">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="card bg-dark text-light">
                  <div className="card-body text-center">
                    <div className="h1 mb-3">
                      <i className="bi bi-people"></i>
                    </div>
                    <h3 className="card-title mb-3">Carrier Pigeon</h3>
                    <p className="card-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Iure, quas quidem possimus dolorum esse eligendi?
                    </p>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="questions" className="p-5">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md">
                <img
                  className="img-fluid w-50"
                  src="https://thumbs.dreamstime.com/b/banging-head-against-wall-186161837.jpg"
                  alt=""
                />
              </div>
              <div className="col-md">
                <h2>Extreme Patience Development</h2>
                <p class="lead">
                  Our product has special features to improve the discipline and
                  resolve of all users. In fact, it often becomes inaccessible
                  for hours at a time!
                </p>
                <a href="#" className="btn btn-light mt-3">
                  ready, set, wait!
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="faqs" class="p-5">
          <div className="container">
            <h2 className="text-center mb-4">Frequently Asked Questions</h2>
            <div className="accordian accordian-flush">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#question-one"
                  >
                    Why the hell are we using this?
                  </button>
                </h2>
                <div
                  id="question-one"
                  class="accordion-collapse collapse"
                  data-bs-parent="#questions"
                >
                  <div class="accordion-body"></div>
                  We don't know, ask your boss
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#question-two"
                  >
                    Surely there's a better way, right?
                  </button>
                </h2>
                <div
                  id="question-two"
                  class="accordion-collapse collapse"
                  data-bs-parent="#questions"
                >
                  <div class="accordion-body"></div>
                  Ha! We can't believe you're using it either!
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#question-three"
                  >
                    Is this program a torture device?
                  </button>
                </h2>
                <div
                  id="question-three"
                  class="accordion-collapse collapse"
                  data-bs-parent="#questions"
                >
                  <div class="accordion-body"></div>
                  We may or may not have been hired to extract information on
                  Osama bin Laden's whereabouts...
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="instructors" className="p-5 bg-primary">
          <div className="container">
            <h2 className="text-center text-white">
              Our World-Renowned Instructors
            </h2>
            <p className="lead text-center text-white mb-5">
              All instructors have at least 3 weeks of industry experience
            </p>
            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div class="card bg-light">
                  <div className="card-body text-center">
                    <img
                      src="https://randomuser.me/api/portraits/men/12.jpg"
                      alt=""
                      className="rounded-circle mb-3"
                    />
                    <h3 className="card-title mb-3"></h3>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Numquam, minima dignissimos dolores placeat culpa enim.
                    </p>
                    <a href="#">
                      <i className="bi bi-twitter text dark mx-1"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div class="card bg-light">
                  <div className="card-body text-center">
                    <img
                      src="https://randomuser.me/api/portraits/men/13.jpg"
                      alt=""
                      className="rounded-circle mb-3"
                    />
                    <h3 className="card-title mb-3"></h3>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Numquam, minima dignissimos dolores placeat culpa enim.
                    </p>
                    <a href="#">
                      <i className="bi bi-twitter text-dark mx-1"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-facebook text-dark mx-1"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-linkedin text-dark mx-1"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram text-dark mx-1"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <img
                      src="https://randomuser.me/api/portraits/men/14.jpg"
                      alt=""
                      className="rounded-circle mb-3"
                    />
                    <h3 className="card-title mb-3"></h3>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Numquam, minima dignissimos dolores placeat culpa enim.
                    </p>
                    <a href="#">
                      <i className="bi bi-twitter text-dark mx-1"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-facebook text-dark mx-1"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-linkedin text-dark mx-1"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram text-dark mx-1"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <img
                      src="https://randomuser.me/api/portraits/men/15.jpg"
                      alt=""
                      className="rounded-circle mb-3"
                    />
                    <h3 className="card-title mb-3"></h3>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Numquam, minima dignissimos dolores placeat culpa enim.
                    </p>
                    <a href="#">
                      <i className="bi bi-twitter text-dark mx-1"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-facebook text-dark mx-1"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-linkedin text-dark mx-1"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram text-dark mx-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-md">
                <h2 className="text-center mb-4">Contact Info</h2>
                <ul className="list-group list-group-flush lead"></ul>
                <li className="list-group-item">
                  <span className="fw-bold">Location:</span> BFE Louisiana
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Phone Number:</span> 867-5309
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Email:</span> yourmom@yourmom.com
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Student Email:</span>{" "}
                  DoNotReply@yourmom.com
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Tech Support:</span>{" "}
                  1-800-BAD-DB-SUPPORT
                </li>
              </div>
              <div className="col-md">
                <div id="map"></div>
              </div>
            </div>
          </div>
        </section>

        <footer className="p-5 bg-dark text-white text-center position-relative">
          <div className="container">
            <p className="lead">
              All rights not reserved, couldn't afford it &copy;
            </p>
          </div>
        </footer>

        <div
          class="modal fade"
          id="enroll"
          tabindex="-1"
          role="dialog"
          aria-labelledby="enrollLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="enrollLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
