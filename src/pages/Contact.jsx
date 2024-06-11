import React, { useState } from "react";

// Success message component
function SuccessMessage() {
  return (
    <div className="text-green-500 font-semibold">
      Thank you for your submission! We will get back to you soon.
    </div>
  );
}

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary form processing here
    // Set isSubmitted to true after successful form submission
    setIsSubmitted(true);
  };

  return (
    <div className="fadein font-poppins w-screen h-[100vh] p-4 gap-5 flex flex-col items-center justify-center">
      <div className="w-[80vw] flex gap-2 flex-col items-start">
        <h2 className="text-4xl font-semibold text-left">
          Love to hear from you,<br></br>
          Get in touch with us! 👋
        </h2>
        <div>
          <p className="text-gray-500 text-left">
            Fill out the form and our team will get back to you within 24 hours.
          </p>
        </div>
      </div>
      <div className="w-[80vw]">
        {/* Conditional rendering of the success message */}
        {isSubmitted ? (
          <SuccessMessage />
        ) : (
          <form
            netlify
            name="contact"
            method="POST"
            onSubmit={handleSubmit} // Call handleSubmit function on form submission
            className="flex flex-col gap-4 items-center justify-center">
            <div className="flex gap-3 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="p-2 rounded-md bg-gray-100 w-1/2"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-2 rounded-md bg-gray-100 w-1/2"
              />
            </div>

            <textarea
              name="message"
              placeholder="Message"
              className="p-2 rounded-md bg-gray-100 w-full h-[10rem]"></textarea>
            <button
              type="submit"
              className="p-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
