import React from "react";
import "./Footer.css"
import { FaPhoneAlt, FaTwitter, FaFacebookSquare, FaInstagram, FaWhatsappSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";

const Footer = () => {

  return (
    <div className="footer_main_container">
        <h2 className="footer_heading">
          Get In Touch With Us
        </h2>
      <div className="footer_sub_container">
        <div className="details_main_container">
          <div className="details_sub_container">
            <span>
              <h4>Location</h4>
              <FaLocationDot style={{color: "red"}}/>
            </span>
            <p>
              Kamla Nehru Nagar, Jaipur
            </p>
          </div>
          <div className="details_sub_container">
            <span>
              <h4>Phone</h4>
              <FaPhoneAlt style={{color: "green"}} />
            </span>
            <p>
              +91 233-333-xxxx
            </p>
          </div>
          <div className="details_sub_container">
            <span>
              <h4>Website</h4>
              <CgWebsite />
            </span>
            <p>
              deluxIndiaLogistic.com
            </p>
          </div>
          <div className="details_sub_container">
            <span>
              <h4>Twitter</h4>
              <FaTwitter style={{color: "#00ACEE"}} />
            </span>
            <p>
              @deluxIndia
            </p>
          </div>
          <div className="details_sub_container">
            <span>
              <h4>Facebook</h4>
              <FaFacebookSquare style={{color: "#4267B2"}} />
            </span>
            <p>
              @deluxIndia
            </p>
          </div>
          <div className="details_sub_container">
            <span>
              <h4>Instagram</h4>
              <FaInstagram 
                
              />
            </span>
            <p>
              @deluxIndia
            </p>
          </div>
          <div className="details_sub_container">
            <span>
              <h4>Whatsapp</h4>
              <FaWhatsappSquare style={{color: "#5FFC7B"}} />
            </span>
            <p>
              @deluxIndia
            </p>
          </div>
        </div>
        <form className="footer_form_container">
          <input type="text" />
          <input type="text" />
          <textarea name="" id="" cols="10" rows="10" className="footer_form_textarea">

          </textarea>
          <button className="form_action_btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Footer
