import React, { useState } from "react";
import PageHeadingCard from "../components/shared/PageHeadingCard/PageHeadingCard";
import "./styles/contact.css";
import "./styles/division.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@corpuslifescience.com?subject=${
      "Enquiry request: " + encodeURIComponent(formData.subject)
    }&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <div className="">
      <PageHeadingCard
        image={{
          src: "https://cdn.sanity.io/images/tr3yh6z2/production/ff987a91e9a11147b4003c7fa4bae657dc8fab42-1920x1258.jpg?w=2000&fit=max&auto=format",
          description:
            "Have questions or need assistance? We're here to help! Reach out to us for support, inquiries, or feedback. Whether you need help with our services, have a query, or just want to say hello, we're happy to assist. Contact us via email, phone, or our support form!",
        }}
        title="Contact Us"
      />
      <div className="division-products-container">
        <div className="division-products-grid">
          <div className={"product-card even-card"}>
            <div className="product-image-container">
              <img
                src="https://cdn.sanity.io/images/tr3yh6z2/production/ff987a91e9a11147b4003c7fa4bae657dc8fab42-1920x1258.jpg?w=2000&fit=max&auto=format"
                alt="Product Image"
              />
            </div>
            <div
              className="product-info"
              style={{
                alignItems: "flex-start",
                justifyContent: "flex-start",
                lineHeight: "25px",
              }}
            >
              <h3>Corporate Office</h3>
              <p>
                101-A, FF,
                <br /> Radha Apartment Jogidas,
                <br /> Vitthals Pole, Raopura, Vadodara - 390001 Gujarat
              </p>
            </div>
          </div>
          <div className={"product-card odd-card"}>
            <div className="product-image-container">
              <img
                src="https://cdn.sanity.io/images/tr3yh6z2/production/ff987a91e9a11147b4003c7fa4bae657dc8fab42-1920x1258.jpg?w=2000&fit=max&auto=format"
                alt="Product Image"
              />
            </div>
            <div
              className="product-info"
              style={{
                alignItems: "flex-start",
                justifyContent: "flex-start",
                lineHeight: "25px",
              }}
            >
              <h3>Registered Office</h3>
              <p>
                231, B.B.D. Road,
                <br /> Near Old Post Office,
                <br /> Hindmotor, Hooghly - 712233, West Bengal
              </p>
            </div>
          </div>
          <div className={"product-card odd-card"}>
            <div className="product-image-container">
              <img
                src="https://cdn.sanity.io/images/tr3yh6z2/production/ff987a91e9a11147b4003c7fa4bae657dc8fab42-1920x1258.jpg?w=2000&fit=max&auto=format"
                alt="Product Image"
              />
            </div>
            <div
              className="product-info"
              style={{
                alignItems: "flex-start",
                justifyContent: "flex-start",
                lineHeight: "25px",
              }}
            >
              <h3>Contact Number</h3>
              <p>
                +91 8420112846 <br />
                +91 8902036365
                <br />
                +91 33 2694 4604 / 4605
                <br />
              </p>
            </div>
          </div>
          <div
            className={"product-card even-card"}
            style={{
              alignItems: "flex-start",
              justifyContent: "flex-start",
              lineHeight: "25px",
            }}
          >
            <div className="product-image-container">
              <img
                src="https://cdn.sanity.io/images/tr3yh6z2/production/ff987a91e9a11147b4003c7fa4bae657dc8fab42-1920x1258.jpg?w=2000&fit=max&auto=format"
                alt="Product Image"
              />
            </div>
            <div
              className="product-info"
              style={{ alignItems: "flex-start", justifyContent: "flex-start" }}
            >
              <h3>Email</h3>
              <p>info@corpuslifescience.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form-container">
        <h2 className="form-heading">Interested in discussing?</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Contact Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
