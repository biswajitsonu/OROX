import React from 'react';
import { Link } from 'react-router-dom';

function SecondPage() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 text-center">
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight max-w-4xl mx-auto">
          With OROX, there’s no guesswork.
          <br />
          Just smart, data-driven investing
        </h1>
        <p className="mt-4 text-base sm:text-lg max-w-full mx-auto text-gray-800 whitespace-nowrap overflow-x-auto">
          Skip the FOMO and stress with AI-powered strategies built by industry-leading experts.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center px-4">
            <div className="p-4 mb-4">
              <img
                alt="Icon showing AI powered concept with digital and tech elements"
                className="w-16 h-16"
                height={64}
                src="https://i.postimg.cc/bvVb4px5/AI-Powered.png"
                width={64}
              />
            </div>
            <h3 className="font-semibold text-gray-900 text-base whitespace-nowrap overflow-x-auto">
              Easy, smart investing
            </h3>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed max-w-[12rem] mx-auto break-words">
              Smarter investing made easy<br />with AI and our sleek OROX app.
            </p>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <div className="p-4 mb-4">
              <img
                alt="Icon showing activity history with stacked coins and a plant sprout growing"
                className="w-16 h-16"
                height={64}
                src="https://i.postimg.cc/4xdxqtWJ/Activity-History.png"
                width={64}
              />
            </div>
            <h3 className="font-semibold text-gray-900 text-base whitespace-nowrap overflow-x-auto">
              Consistency, not speculation
            </h3>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              Built to perform through ups and downs with less stress.
            </p>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <div className="p-4 mb-4">
              <img
                alt="Icon of a secure lock in front of a card representing security and transparency"
                className="w-16 h-16"
                height={64}
                src="https://i.postimg.cc/YST019ft/Secure-Payment.png"
                width={64}
              />
            </div>
            <h3 className="font-semibold text-gray-900 text-base">
              Secure and transparent
            </h3>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              Secure and transparent with blockchain-backed tech.
            </p>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <div className="p-4 mb-4">
              <img
                alt="Icon of a shield with a handshake representing trust"
                className="w-16 h-16"
                height={64}
                src="https://i.postimg.cc/htkRs7wZ/Trust.png"
                width={64}
              />
            </div>
            <h3 className="font-semibold text-gray-900 text-base">
              Built with trust
            </h3>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              Aussie-built, trusted and accessible to investors worldwide.
            </p>
          </div>
        </div>
        <button
          className="mt-12 bg-blue-800 hover:bg-blue-900 text-white font-semibold text-lg rounded-full px-8 py-4 transition-colors duration-300"
          type="button"
        >
          Create an account
        </button>
        <div className="mt-8">
          {/* Back to Home link removed as per user request */}
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
