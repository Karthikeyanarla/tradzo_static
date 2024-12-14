import React from "react";
import { Link } from "react-router-dom";
// import logo from "../../../assets/logos-01.svg";
import logo from "../../../assets/logowhite.png";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Logo and Intro */}
        <div className="flex flex-col md:flex-row md:justify-between items-center text-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex justify-center mx-auto">
              <img src={logo} className="h-20 w-auto" alt="Logo" />
            </Link>
            <p className="mt-6 text-sm max-w-md">
              Tradzo Technologies creates platforms & investment products to
              invest in Indian Equities with more Transparency & Professional
              Approach. Our strategies are curated to provide actionable
              research and trades in Equities & Derivatives.
            </p>
          </div>

          {/* Resource Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
            <div>
              <h2 className="text-lg font-semibold mb-4">Resources</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/home" className="hover:text-gray-400 link-padding">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-gray-400">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us Links */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Follow us</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://m.facebook.com/HiTradzo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/hitradzo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://in.linkedin.com/company/tradzo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/hitradzo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Legal</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/disclaimer" className="hover:text-gray-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-gray-400">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/disclaimer" className="hover:text-gray-400">
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-gray-400">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Company</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="hover:text-gray-400">
                    About Us
                  </Link>
                </li>

                <li>
                  <Link to="/offices" className="hover:text-gray-400">
                    Our Offices
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 mb-6" />

        {/* Social Media Links */}
        <ul className="flex justify-center space-x-4">
          {/* Facebook Icon */}
          <li className="relative group">
            <a
              href="https://m.facebook.com/HiTradzo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-white text-blue-600 rounded-full shadow-md transition-transform transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#2aa4f4"
                  d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4z"
                />
                <path
                  fill="#fff"
                  d="M26.707 29.301h5.176l.813-5.258h-5.989v-2.874c0-2.184.714-4.121 2.757-4.121h3.283v-5.464c-.577-.078-1.797-.248-4.102-.248-4.814 0-7.636 2.542-7.636 8.334v3.498H16.06v5.258h4.948v14.452C21.988 43.9 22.981 44 24 44c.921 0 1.82-.084 2.707-.204V29.301z"
                />
              </svg>
            </a>
            <span className="absolute bottom-full mb-2 hidden group-hover:block bg-white text-black text-sm py-1 px-2 rounded shadow-md">
              Facebook
            </span>
          </li>

          {/* Youtube Icon */}
          <li className="relative group">
            <a
              href="https://youtube.com/@hitradzo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-white text-red-600 rounded-full shadow-md transition-transform transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FF3D00"
                  d="M43.2 33.9c-.4 2.1-2.1 3.7-4.2 4-3.3.5-8.8 1.1-15 1.1-6.1 0-11.6-.6-15-1.1-2.1-.3-3.8-1.9-4.2-4C4.4 31.6 4 28.2 4 24c0-4.2.4-7.6.8-9.9.4-2.1 2.1-3.7 4.2-4 3.3-.5 8.8-1.1 15-1.1s11.6.6 15 1.1c2.1.3 3.8 1.9 4.2 4 .4 2.3.9 5.7.9 9.9-.4 4.2-.8 7.6-1.2 9.9z"
                />
                <path fill="#FFF" d="M20 31V17l12 7z" />
              </svg>
            </a>
            <span className="absolute bottom-full mb-2 hidden group-hover:block bg-white text-black text-sm py-1 px-2 rounded shadow-md">
              YouTube
            </span>
          </li>

          {/* Twitter Icon */}
          <li className="relative group">
            <a
              href="https://x.com/hitradzo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-white text-blue-400 rounded-full shadow-md transition-transform transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#03A9F4"
                  d="M42 12.3c-1.4.6-2.9 1-4.4 1.2 1.6-1 2.8-2.6 3.4-4.5-1.5.9-3.2 1.5-4.9 1.9-1.4-1.5-3.4-2.4-5.6-2.4-4.3 0-7.8 3.6-7.8 7.8 0 .6.1 1.3.2 1.8-6.5-.3-12.2-3.4-16-8.1-.7 1.2-1 2.5-1 4 0 2.7 1.4 5 3.4 6.4-1.3-.1-2.5-.4-3.6-.9v.1c0 3.8 2.7 6.9 6.3 7.7-.7.2-1.5.2-2.2.2-.5 0-1.1 0-1.6-.1 1.1 3.3 4.2 5.6 7.8 5.7-2.9 2.2-6.6 3.5-10.5 3.5-.7 0-1.5 0-2.2-.1 3.7 2.4 8 3.8 12.7 3.8 15.2 0 23.5-12.5 23.5-23.5 0-.4 0-.7 0-1.1 1.7-1.1 3.2-2.6 4.3-4.2z"
                />
              </svg>
            </a>
            <span className="absolute bottom-full mb-2 hidden group-hover:block bg-white text-black text-sm py-1 px-2 rounded shadow-md">
              Twitter
            </span>
          </li>

          {/* LinkedIn Icon */}
          <li className="relative group">
            <a
              href="https://in.linkedin.com/company/tradzo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-white text-blue-700 rounded-full shadow-md transition-transform transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#0288D1"
                  d="M42 4H6c-1.1 0-2 .9-2 2v36c0 1.1.9 2 2 2h36c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"
                />
                <path
                  fill="#FFF"
                  d="M12 19h5v18h-5V19zm2.5-8c1.6 0 2.5 1.1 2.5 2.5S16.1 16 14.5 16 12 14.9 12 13.5 13.4 11 14.5 11zm6 8h5v2.4h.1c.7-1.2 2.3-2.5 4.7-2.5 5 0 5.9 3.3 5.9 7.7V37h-5v-9.5c0-2.2-.8-3.7-2.8-3.7-2.1 0-3.2 1.5-3.2 3.7V37h-5V19z"
                />
              </svg>
            </a>
            <span className="absolute bottom-full mb-2 hidden group-hover:block bg-white text-black text-sm py-1 px-2 rounded shadow-md">
              LinkedIn
            </span>
          </li>

          {/* Instagram Icon */}
          <li className="relative group">
            <a
              href="https://www.instagram.com/hitradzo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md transition-transform transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 48 48"
              >
                <radialGradient
                  id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                  cx="19.38"
                  cy="42.035"
                  r="44.899"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fd5" />
                  <stop offset=".328" stopColor="#ff543f" />
                  <stop offset=".348" stopColor="#fc5245" />
                  <stop offset=".504" stopColor="#e64771" />
                  <stop offset=".643" stopColor="#d53e91" />
                  <stop offset=".761" stopColor="#cc39a4" />
                  <stop offset=".841" stopColor="#c837ab" />
                </radialGradient>
                <path
                  fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20C42.014,38.383,38.417,41.986,34.017,41.99z"
                />
                <radialGradient
                  id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                  cx="11.786"
                  cy="5.54"
                  r="29.813"
                  gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#4168c9" />
                  <stop offset=".999" stopColor="#4168c9" stopOpacity="0" />
                </radialGradient>
                <path
                  fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20C42.014,38.383,38.417,41.986,34.017,41.99z"
                />
                <path
                  fill="#fff"
                  d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                />
                <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
                <path
                  fill="#fff"
                  d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                />
              </svg>
            </a>
            <span className="absolute bottom-full mb-2 hidden group-hover:block bg-white text-black text-sm py-1 px-2 rounded shadow-md">
              Instagram
            </span>
          </li>
        </ul>
      </div>
      <div className="bg-gray-800 py-4 mt-8">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Tradzo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
