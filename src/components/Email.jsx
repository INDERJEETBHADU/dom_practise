import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Email() {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      !form.current.to_name.value ||
      !form.current.from_name.value ||
      !form.current.message.value
    ) {
      setMessage("Please fill in all fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_mkn8lwp",
        "template_tvhbfqf",
        form.current,
        "eQ1bcOCJV-XgC_tUL"
      )
      .then(
        () => {
          setMessage("Email sent successfully!");
        },
        (error) => {
          setMessage("Failed to send email. Please try again.");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="email-container">
      <form ref={form} onSubmit={sendEmail} className="email-form">
        <label>Name</label>
        <input type="text" name="to_name" className="form-input" />
        <label>From</label>
        <input type="text" name="from_name" className="form-input" />
        <label>Message</label>
        <textarea name="message" className="form-textarea" />
        <input type="submit" value="Send" className="form-button" />
      </form>
      {message && <p className="form-message">{message}</p>}
    </div>
  );
}

export default Email;
