import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef();
  const [popupMessage, setPopupMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // Replace with your EmailJS Service ID
        "your_template_id", // Replace with your EmailJS Template ID
        form.current,
        "your_user_id" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setPopupMessage("✅ Thank you! Your message has been sent. We'll get back to you shortly.");
          form.current.reset();

          // Hide popup after 3 seconds
          setTimeout(() => setPopupMessage(""), 3000);
        },
        () => {
          setPopupMessage("❌ Failed to send message. Please try again later.");
          setTimeout(() => setPopupMessage(""), 3000);
        }
      );
  };

  return (
    <div className="relative">
      {/* Popup */}
      {popupMessage && (
        <div className="fixed top-5 right-5 bg-gray-800 text-white px-4 py-2 rounded shadow-lg animate-fade-in">
          {popupMessage}
        </div>
      )}

      {/* Form */}
      <form ref={form} onSubmit={sendEmail} className="p-4 bg-gray-100 rounded">
        <label className="block mb-2">Your Name</label>
        <input
          type="text"
          name="user_name"
          className="border p-2 w-full mb-4"
          required
        />

        <label className="block mb-2">Your Email</label>
        <input
          type="email"
          name="user_email"
          className="border p-2 w-full mb-4"
          required
        />

        <label className="block mb-2">Message</label>
        <textarea
          name="message"
          className="border p-2 w-full mb-4"
          required
        />

        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
