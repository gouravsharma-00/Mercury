"use client"
import React, { useState } from 'react';

export default function MindReader() {
  const [input, setInput] = useState('');
  const [processing, setProcessing] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [userConfirmed, setUserConfirmed] = useState(null); // null, true, or false
  const [processingStep, setProcessingStep] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setProcessing(true);
    setRevealed(false);
    setUserConfirmed(null);

     setProcessingStep(0);

  let step = 0;
  const interval = setInterval(() => {
    step++;
    setProcessingStep(step);

    if (step === 3) {
      clearInterval(interval);
      setTimeout(() => {
        setProcessing(false);
        setRevealed(true);
      }, 100); // slight delay before showing result
    }
  }, 500); // 5 seconds between steps
  };

  const reset = () => {
    setInput('');
    setProcessing(false);
    setRevealed(false);
    setUserConfirmed(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="bg-gray-200 p-8 rounded w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">🧠 I Can Read Your Mind</h1>

        
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-full p-3 rounded-lg text-black mb-4 border border-gray-400 focus:outline-none focus:ring-0"
              placeholder="Think of something and type it here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={processing || revealed }
            />
            { !processing && !revealed && (
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 transition p-3 rounded-lg w-full"
              >
                Let the AI Read My Mind
              </button>
            )}

          </form>
        

          {processing && (
            <div className="mt-6 space-y-4">
              <progress value={processingStep} max="3"></progress>
              {processingStep == 0 && <p className="text-lg animate-pulse">🔍 Connecting to quantum neural net...</p>}
              {processingStep == 1 && <p className="text-lg animate-pulse">💾 Uploading brain waves...</p>}
              {processingStep == 2 && <p className="text-lg animate-pulse">🤖 AI supercomputer is analyzing...</p>}
            </div>
          )}

        {revealed && userConfirmed === null && (
          <div className="mt-6">
            <div className="bg-gray-700 p-6 rounded-xl shadow-inner">
              <p className="text-xl mb-2">🧙‍♂️ Told you I can read minds!</p>
              <p className="text-3xl font-semibold text-green-400">"{input}"</p>
            </div>
            <p className="mt-4 text-lg">Is this what you were thinking?</p>
            <div className="mt-4 flex gap-4 justify-center">
              <button
                onClick={() => setUserConfirmed(true)}
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
              >
                Yes
              </button>
              <button
                onClick={() => setUserConfirmed(false)}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
              >
                No
              </button>
            </div>
          </div>
        )}

        {userConfirmed === true && (
          <div className="mt-6">
            <p className="text-xl mb-2">😎 I knew it! I'm awesome.</p>
            <img
              src="https://th.bing.com/th/id/OIP.m-EjvY_T0FYH_TSGPVsUkgHaGp?rs=1&pid=ImgDetMain" // Proud man image
              alt="Proud man"
              className="rounded-xl mx-auto mt-4 shadow-lg"
            />
            <button
              onClick={reset}
              className="mt-6 bg-purple-600 hover:bg-purple-700 transition p-3 rounded-lg w-full"
            >
              Try Again
            </button>
          </div>
        )}

        {userConfirmed === false && (
          <div className="mt-6">
            <p className="text-xl mb-2">🚓 hmmmm................... .</p>
            <img
              src="https://i.pinimg.com/736x/d3/48/b0/d348b0a3f3cdb1c8211f7f57b0e59487.jpg" // Cop saying you're lying image
              alt="Cop says you're lying"
              className="rounded-xl mx-auto mt-4 shadow-lg"
            />
            <button
              onClick={reset}
              className="mt-6 bg-purple-600 hover:bg-purple-700 transition p-3 rounded-lg w-full"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
