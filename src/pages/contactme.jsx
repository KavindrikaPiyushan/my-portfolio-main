import React from "react";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Let's work together</h2>
        <p>
          Whether you need a website, mobile app, or a striking design, I'm
          ready to turn your ideas into reality. Let's collaborate and create
          something exceptional together. I look forward to connecting with
          you!"
        </p>
        <form
          action="https://send.pageclip.co/nQfJqWkJIOeVjd297F41qt8FBkAYBez7/contact-me"
          class="pageclip-form"
          method="post"
        >
          <div className="form-row">
            <input type="text" name="name" placeholder="Your Name" />
            <input type="email" name="email" placeholder="Your Email" />
          </div>
          <div className="form-row">
            <input type="text" name="subject" placeholder="Subject" />
            <input type="text" name="phone number" placeholder="Phone Number" />
          </div>
          <textarea
            name="message"
            placeholder="Type your message here."
          ></textarea>
          <button name="submit" class="pageclip-form__submit" type="submit">
            Send message
          </button>
        </form>
      </div>
      <div className="contact-info">
        <div>
          <div className="iconboxes">
            <i className="fas fa-phone"></i>
          </div>
          <span>(+94) 75 672 20966</span>
        </div>
        <div>
          <div className="iconboxes">
            <i className="fas fa-envelope"></i>
          </div>
          <span>kavindrikapiyushan@gmail.com</span>
        </div>
        <div>
          <div className="iconboxes">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <span>
            No 82/32, Kheels Housing Scheme, Udugampola, Gampaha, Sri Lanka
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
