import React, { useState, useEffect } from "react";
import { IoIosSend } from "react-icons/io";

const Contact = () => {

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
        setEmail("");
        setSubject("");
        setMessage("");
        setSuccess(true);
    e.preventDefault();
  };

  useEffect(() => {
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }, [success]);

  return (
    <div id="contact" className="container mx-auto mt-4 pb-5">
      <div className="flex flex-col md:flex-row gap-4 p-4">
        <div className="w-full p-4">
          <h1 className="text-2xl mb-8 font-semibold">Contact</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center items-center gap-4 py-5 rounded-lg">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full lg:w-1/2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered w-full lg:w-1/2"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <textarea
                className="textarea textarea-bordered w-full lg:w-1/2"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <button
                type="submit"
                className="btn btn-outline btn-info w-40 shadow-inner hover:shadow-sky-400"
              >
                <IoIosSend />
                Send
              </button>
            </div>

            {success && (
            <div className="flex justify-center items-center gap-4 py-3 rounded-lg">
              <div className="text-center text-md text-green-500">
                Message Sent Successfully!
              </div>
            </div>
          )}
          
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
