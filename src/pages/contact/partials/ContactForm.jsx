import React from 'react';
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from 'react-icons/hi';

const ContactForm = () => {
  return (
    <section className="section-contact">
      <div className="container">
        <div className="contact-wrapper row">
          <div className="col-6">
            <div className="contact-left">
              <h3 className="contact-title">Contact Information</h3>
              <p className="contact-desc">
                Hi everybody. My team's name is Bach Khoa Circus. Contact the team at
                the information below.
              </p>
              <ul className="contact-info">
                <li className="contact-info-item">
                  <HiOutlineLocationMarker />
                  <h4>54 Nguyen Luong Bang, Da Nang</h4>
                </li>
                <li className="contact-info-item">
                  <HiOutlinePhone />
                  <h4>+84 232 111 232</h4>
                </li>
                <li className="contact-info-item">
                  <HiOutlineMail />
                  <h4>bkcircus@gmail.com</h4>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6">
            <div className="contact-right">
              <h3 className="contact-title">Send a message</h3>
              <form className="form-contact">
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Your email"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    rows="8"
                    cols="50"
                    placeholder="Message"
                    className="form-input"
                  ></textarea>
                </div>
                <button className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
