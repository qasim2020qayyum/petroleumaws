import React from 'react'

const About = () => {
  return (
    <section className="welcome_one">
        <div
          className="welcome_one_shape_bg"
          style={{
            backgroundImage: "url(assets/images/welcome_one_shape-bg.png)",
          }}
        />
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="welcome_one_left">
                <div className="welcome_one_left_image">
                  <img src="assets/images/welcome-1-img-1.jpg" alt="" />
                  <ul className="counter_one list-unstyled">
                    <li className="counter_one_single">
                      <h2 className="counter">660</h2>
                      <p>Industrial Solutions</p>
                    </li>
                    <li className="counter_one_single">
                      <div className="counter_one_experience">
                        <h2>
                          <span className="counter">30</span>+
                        </h2>
                      </div>
                      <p>Years Experience</p>
                    </li>
                    <li className="counter_one_single">
                      <h2 className="counter">800</h2>
                      <p>Projects Completed</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="welcome_one_right_content">
                <div className="block-title text-left">
                  <h4>About Company</h4>
                  <h2>We’re More than a Industrial Company</h2>
                </div>
                <div className="welcome_one_right_text_box">
                  <p className="welcome_one_right_first_text">
                    Lorem are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered.
                  </p>
                  <p className="welcome_one_right_second_text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour.
                  </p>
                </div>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-check" />
                    Invest in your simply neighborhood
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    Support people in free text extreme need
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    Largest global industrial business community
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    Share your love for factory community
                  </li>
                </ul>
                <div className="welcome_one_signature_box">
                  <div
                    className="welcome_one_signature_bg"
                    style={{
                      backgroundImage:
                        "url(assets/images/welcome_one_signature.png)",
                    }}
                  ></div>
                  <h3>William Smith</h3>
                  <p>Co Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About
