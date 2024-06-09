import React from "react";

export default function Contact() {
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
        <form className="flex flex-col gap-4 items-center justify-center ">
          <div className="flex gap-3 w-full ">
            <input
              type="text"
              placeholder="Name"
              className="p-2 rounded-md bg-gray-100 w-1/2"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded-md bg-gray-100 w-1/2"
            />
          </div>

          <textarea
            placeholder="Message"
            className="p-2 rounded-md bg-gray-100 w-full h-[10rem]"></textarea>
          <button className="p-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
