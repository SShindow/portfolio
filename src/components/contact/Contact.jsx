import React, { useState, useRef } from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
// Mail sent notification
//     const email_notify = () => toast.success('Mail sent successfully!', {
//         position: "bottom-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         theme: "light",
//         });
// // Email Sending
//     const form = useRef();

//     const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_0tb2zmj', 'template_4h6pm7l', form.current, '4iWAWzfaPn5LXhQ22')
//         e.target.reset();
//     };
// // Check form 
// const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     content: ''
//   });

//   const { name, email, content } = formData;

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name && email && content) {
//       // Perform your action here, e.g., submitting the form data
//       // if all fields are filled or show an error message if any field is empty.

//       // Simulating a successful form submission
//       setTimeout(() => {
//         // Show a success toast message
//         toast.success('Form submitted successfully!', {
//           position: 'top-right',
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });

//         // Example: You can submit the form data here.
//         // submitForm(formData);
//       }, 1000);
//     } else {
//       // Show an error toast message indicating that all fields are required.
//       toast.error('Please fill in all the required fields.', {
//         position: 'top-right',
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//     }
//   };
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your EmailJS configuration here
    const serviceId = "service_0tb2zmj";
    const templateId = "template_4h6pm7l";
    const userId = "4iWAWzfaPn5LXhQ22";

    // Validate the form fields
    if (!name || !email || !message) {
      toast.error("Please fill in all the required fields.");
      return;
    }

    setIsLoading(true);

    // Prepare the email data to send
    const emailData = {
        from_name: name,
        to_email: email,
        message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, emailData, userId)
      .then((response) => {
        toast.success("Email sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        toast.error("Failed to send email. Please try again later.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

    return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i class="bx bx-envelope contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">hia.cao.2001@gmail.com</span>

              <a
                href="mailto:hia.cao.2001@gmail.com.com"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="uil uil-phone contact__card-icon"></i>

              <h3 className="contact__card-title">Phone</h3>
              <span className="contact__card-data">+84 37973 1101</span>

              <a href="" className="contact__button">
                Call me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i class="bx bxl-linkedin-square contact__card-icon"></i>
              <h3 className="contact__card-title">LinkedIn</h3>
              <span className="contact__card-data">
                linkedin.com/in/haicaoxuan/
              </span>

              <a
                href="https://www.linkedin.com/in/haicaoxuan/"
                className="contact__button"
              >
                Text me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
            <h3 className="contact__title">Inquiries</h3>
            <form className="contact__form"
            onSubmit={handleSubmit}>
            <div className="contact__form-div">
                <label className="contact__form-tag">
                Name
                </label>
                <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="contact__form-input"
                placeholder="Enter your name"
            />
            </div>

            <div className="contact__form-div">
                <label htmlFor="" className="contact__form-tag">
                Email address
                </label>
                <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="contact__form-input"
                placeholder="Insert your email address"
            />
            </div>

            <div className="contact__form-div contact__form-area">
                <label htmlFor="message" className="contact__form-tag">
                Message
                </label>
                <textarea
                id="message"
                name="message"
                cols="30"
                rows="10"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="contact__form-input"
                placeholder="Write your content here"
            ></textarea>
            </div>

            <button type="submit" disabled={isLoading} 
            className="button button--flex">
                {isLoading ? "Sending..." : "Send Email"}
                <svg
                class="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="var(--container-color)"
                ></path>
                </svg>
            </button>
            <ToastContainer/>
        </form>
        </div>
    </div>
    </section>
);
};

export default Contact;
