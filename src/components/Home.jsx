import React, { useState } from 'react';
import { FaPlay } from "react-icons/fa";

const Home = () => {
  const [code, setCode] = useState(`<h1 class="text-3xl">Hello, my name is</h1>\n<h2 class="text-6xl font-bold mt-4">Rohan Verma</h2>`);
  const [output, setOutput] = useState(code);

  const handleRun = () => {
    setOutput(code);
  };

  return (
    <div className="container mx-auto mt-4">
      <div className="flex flex-col md:flex-row gap-4 bg-base-200 rounded-box shadow-xl p-4">
        <div className="w-full md:w-2/3 p-4">
          <div className="mockup-browser border bg-base-300">
            <div className="mockup-browser-toolbar">
              <div className="input">https://rohanverma.com</div>
            </div>
            <div className="px-4 pb-16 pt-8 bg-base-200" dangerouslySetInnerHTML={{ __html: output }}></div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-4">
          <div className="form-control h-full flex flex-col">
            <textarea
              className="textarea textarea-bordered flex-grow mb-4"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            ></textarea>
            <button className="btn btn-outline btn-info" onClick={handleRun}> <FaPlay />Run</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
