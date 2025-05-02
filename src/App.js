import React from 'react';

function App() {
  return (
    <>
      <header
        className="border-b border-gray-200 bg-white"
        style={{
          maxWidth: '1440px',
          height: '88px',
          paddingLeft: '80px',
          paddingRight: '80px',
          gap: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 0,
        }}
      >
        <nav className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-3">
            <img
              alt="OROX logo, circular emblem with stylized O and X in navy blue on white background"
              height={40}
              src="Left Accessory.png"
              style={{ width: 238, height: 40 }}
              width={238}
            />
          </div>
          <ul className="hidden md:flex items-center space-x-8 text-sm font-normal text-black">
            <li className="relative group cursor-pointer">
              <button className="flex items-center space-x-1">
                <span>Products</span>
                <svg
                  className="w-3 h-3 text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 9l-7 7-7-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                About
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Contact
              </a>
            </li>
          </ul>
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-[#1f2a4c] border border-[#1f2a4c] rounded-full px-4 py-1.5 text-sm font-semibold hover:bg-[#1f2a4c] hover:text-white transition">
              Log in
            </button>
            <button className="bg-[#1f2a4c] text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-[#16204a] transition">
              Join for free
            </button>
            <div className="border-l border-gray-300 h-6" />
            <button
              aria-label="QR code icon"
              className="text-[#2c3a6c] hover:text-[#1f2a4a] transition"
            >
              <i className="fas fa-qrcode fa-lg" />
            </button>
          </div>
          <div className="md:hidden">
            <button aria-label="Open menu" className="text-[#1f2a4c]">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>
      <main
        className="mx-auto"
        style={{
          maxWidth: '1440px',
          height: '803px',
          padding: '88px 80px',
          gap: '80px',
          display: 'flex',
          justifyContent: 'space-between',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <section
          className="max-w-xl lg:max-w-lg"
          style={{
            width: '1300px',
            height: '627px',
            gap: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}
        >
          <h1
            className="font-extrabold text-[72px] leading-[1.05] text-[#121212]"
            style={{ marginBottom: 8 }}
          >
            Invest smarter.
            <br />
            Grow faster.
            <br />
            <span
              className="bg-[#f9db7a] inline-block -skew-x-[10deg] px-2"
              style={{ display: 'inline-block' }}
            >
              <span className="inline-block skew-x-[10deg]">Build wealth.</span>
            </span>
          </h1>
          <p
            className="text-[18px] leading-[1.1] text-[#121212cc]"
            style={{ marginTop: 0, whiteSpace: 'nowrap' }}
          >
            Forget stock-picking, market timing, and chasing the next bull run.
          </p>
          <p
            className="text-[18px] leading-[1.1] text-[#121212cc]"
            style={{ marginTop: 0 }}
          >
            OROX gives you access to algorithm-driven, professional-grade strategies
            for smarter growth.
          </p>
          <button
            className="mt-8 bg-[#1f2a4c] text-white rounded-full px-8 py-3 text-lg font-semibold hover:bg-[#16204a] transition"
            style={{ width: 'fit-content' }}
          >
            Join for free
          </button>
          <div className="mt-14 flex space-x-4">
            <a
              aria-label="Get it on Google Play"
              className="inline-block"
              href="#"
            >
              <img
                alt="Google Play and Apple App Store badges combined on black background"
                className="h-11 w-auto"
                height={44}
                src="Badges.png"
                width={280}
              />
            </a>
          </div>
        </section>
        <section
          className="relative"
          style={{
            width: '750px',
            height: '750px',
            borderRadius: '24px',
            overflow: 'visible',
            zIndex: 10,
          }}
        >
          <svg
            aria-hidden="true"
            className="circle-bg hidden lg:block"
            viewBox="0 0 900 900"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <circle cx="450" cy="450" r="435" stroke="#d1d5db" />
            <circle cx="450" cy="450" r="405" stroke="#d1d5db" />
            <circle cx="450" cy="450" r="375" stroke="#d1d5db" />
            <circle cx="450" cy="450" r="345" stroke="#d1d5db" />
            <circle cx="450" cy="450" r="315" stroke="#d1d5db" />
            <circle cx="450" cy="450" r="285" stroke="#d1d5db" />
            <circle cx="450" cy="450" r="255" stroke="#d1d5db" />
            <circle cx="450" cy="450" r="225" stroke="#d1d5db" />
            <circle cx="450" cy="450" r="195" stroke="#d1d5db" />
            <circle cx="450" cy="450" r="165" stroke="#d1d5db" />
            <circle cx="450" cy="450" r="135" stroke="#d1d5db" />
            <circle cx="450" cy="450" r="105" stroke="#d1d5db" />
            <circle cx="450" cy="450" r="75" stroke="#d1d5db" />
            <circle cx="450" cy="450" r="45" stroke="#d1d5db" />
            <circle cx="450" cy="450" r="15" stroke="#d1d5db" />
          </svg>
          <div
            className="image-container"
            style={{
              position: 'relative',
              marginLeft: 'auto',
              width: '600px',
              transform: 'translateY(-10%) rotate(15deg)',
              borderRadius: '24px',
              overflow: 'visible',
            }}
          >
            <img
              alt="Mobile phone with blue frame showing OROX investment app dashboard with total balance, deposit and withdraw buttons, available assets, and investment balance"
              src="Image.png"
              style={{ width: '100%', height: 'auto', borderRadius: '24px', display: 'block' }}
            />
          </div>
        </section>
      </main>
      <footer style={{ position: 'relative', zIndex: 5 }}>
        <img
          alt="Dark footer background with abstract shapes"
          src="Dark.png"
          style={{ width: '100%', height: '200px', display: 'block' }}
        />
      </footer>
    </>
  );
}

export default App;
