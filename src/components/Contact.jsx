import React from "react";
import { IoIosSend } from "react-icons/io";


const Contact = () => {
  return (
    <div className="container mx-auto mt-4 pb-5">
      <div className="flex flex-col md:flex-row gap-4 p-4">
        <div className="w-full p-4">
          <h1 className="text-2xl mb-8 font-semibold">Contact</h1>

          <div
            className="flex flex-col justify-center items-center gap-4
                        py-5 rounded-lg"
          >
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-1/3 md:w-1/2"
            />

            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered w-1/3 md:w-1/2"
            />

            <textarea
              className="textarea textarea-bordered w-1/3 md:w-1/2 h-24"
              placeholder="Message"
            />

            <button 
              className="btn btn-outline btn-info w-40 shadow-inner hover:shadow-sky-400" 
            > 
              <IoIosSend />Send
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
