import React from 'react';

function ThirdPage() {
  return (
    <section className="bg-[#F0F2FA] rounded-xl mx-6 my-10 p-8 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 max-w-7xl mx-auto">
      <div className="flex-1 max-w-xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E1E1E] leading-tight mb-4">
          <span className="bg-[#8B8ED6] text-white px-2 rounded">
            5 easy steps
          </span>
          {' '}with OROX.
          <br />
          Step 1: Download the app
        </h2>
        <p className="text-base text-[#1E1E1E] mb-8 leading-relaxed max-w-md">
          Get started by downloading the OROX app from the{' '}
          <a className="text-[#2B6CB0] underline" href="#">
            App Store
          </a>{' '}
          or{' '}
          <a className="text-[#2B6CB0] underline" href="#">
            Play Store
          </a>
          . Or{' '}
          <a className="text-[#2B6CB0] underline" href="#">
            sign up
          </a>{' '}
          in minutes and access, stress-free high-growth investing.
        </p>
        <div className="flex space-x-2 mb-20">
          <span className="w-3 h-3 rounded-full bg-[#1E1E1E]" />
          <span className="w-3 h-3 rounded-full bg-[#A0A0A0]" />
          <span className="w-3 h-3 rounded-full bg-[#A0A0A0]" />
          <span className="w-3 h-3 rounded-full bg-[#A0A0A0]" />
          <span className="w-3 h-3 rounded-full bg-[#A0A0A0]" />
        </div>
        <button
          className="bg-white border border-black text-black font-semibold rounded-full px-8 py-3 hover:bg-black hover:text-white transition"
          type="button"
        >
          Create your account
        </button>
      </div>
      <div className="flex-1 max-w-[320px] md:max-w-[400px] relative">
        <img
          alt="Blue smartphone with OROX app screen showing logo and text 'Expanding investment access with innovation and expertise.'"
          className="rounded-3xl"
          height={800}
          src="https://i.postimg.cc/W3chkhsg/iPhone.png"
          width={400}
        />
      </div>
    </section>
  );
}

export default ThirdPage;
