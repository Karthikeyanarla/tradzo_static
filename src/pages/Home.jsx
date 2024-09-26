import React from "react";
import { useNavigate } from "react-router-dom";
import SubscriptionPlan from "./Subscription";
import logo from "../assets/logos-01.svg";
import logo3 from "../assets/logo3.jpeg";

// YouTube video component
const YouTubeVideo = ({ videoId }) => (
  <iframe
    className="w-full h-56 md:h-64 lg:h-72 xl:h-80 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
    src={`https://www.youtube.com/embed/${videoId}`}
    title="YouTube video"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const isLogged = JSON.parse(localStorage.getItem("isLogged"));
    if (isLogged) {
      navigate("/user/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen scroll-smooth">
      {/* Landing Section */}
      <section
        className="custom-small-height h-screen sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] text-white flex flex-col justify-center items-center text-center p-8 relative overflow-hidden"
        style={{
          backgroundImage: `url(${logo3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <style jsx>
          {`
            @media (max-width: 639px) {
              .custom-small-height {
                height: 40vh;
              }
            }
          `}
        </style>
        {/* <img
              src={logo}
              className="mr-3 ml-0 pl-0 w-48 h-24 justify-self-start object-cover"
              alt="Logo"
            /> */}
        {/* <button
          onClick={handleGetStarted}
          className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-100 transition duration-300"
        >
          Get Started
        </button> */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-full opacity-20 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 animate-pulse"></div>
        </div>
      </section>

      {/* YouTube Video Section */}
      {/* <section className="py-16 bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-4xl font-semibold text-center mb-8">
          Trading Tips & Strategies
        </h2>
        <div className="overflow-x-auto">
          <div className="flex space-x-6">
            <YouTubeVideo videoId="BHuFfWPk3iY" />
            <YouTubeVideo videoId="Xxs6jkjpFlk" />
            <YouTubeVideo videoId="q12WapUwAQ8" />
          </div>
        </div>
      </section>
       */}

      {/* Actionable Research Calls Section */}
      <section className="py-16 bg-white p-8 rounded-lg shadow-xl mt-8">
        <h2 className="text-4xl font-semibold text-center mb-8">
          Actionable Research Calls
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Index Trades */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold mb-4 text-blue-800">
              Index Trades
            </h3>
            <p className="text-gray-700 mb-2">
              Straightforward bets on Nifty or BankNifty Futures using
              Macro-Technical Analysis.
            </p>
            <ul className="text-gray-600 space-y-1">
              <li>
                <strong>Horizon:</strong> 1-5 Days
              </li>
              <li>
                <strong>Expected Return:</strong> 1%-3%
              </li>
              <li>
                <strong>Avg Stop Loss:</strong> 1%
              </li>
              <li>
                <strong>Avg R:R Ratio:</strong> 1:2
              </li>
            </ul>
          </div>

          {/* Trading Calls */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold mb-4 text-blue-800">
              Trading Calls
            </h3>
            <p className="text-gray-700 mb-2">
              Long/Short Trades on Stocks using Technical Analysis & Pattern
              Recognition.
            </p>
            <ul className="text-gray-600 space-y-1">
              <li>
                <strong>Time Horizon:</strong> 2 Weeks
              </li>
              <li>
                <strong>Expected Return:</strong> 3%-8%
              </li>
              <li>
                <strong>Avg Stop Loss:</strong> 2%-3%
              </li>
              <li>
                <strong>Avg R:R Ratio:</strong> 1:2
              </li>
            </ul>
          </div>

          {/* Positional Trades */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold mb-4 text-blue-800">
              Positional Trades
            </h3>
            <p className="text-gray-700 mb-2">
              Medium-term trades with higher returns and better risk-to-reward
              ratio.
            </p>
            <ul className="text-gray-600 space-y-1">
              <li>
                <strong>Time Horizon:</strong> 3-5 Months
              </li>
              <li>
                <strong>Expected Return:</strong> 15%-35%
              </li>
              <li>
                <strong>Avg Stop Loss:</strong> 5%-10%
              </li>
              <li>
                <strong>Avg R:R Ratio:</strong> 1:3
              </li>
            </ul>
          </div>

          {/* Option Makers */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold mb-4 text-blue-800">
              Option Makers
            </h3>
            <p className="text-gray-700 mb-2">
              High-risk strategy using Technical Analysis to trade opportunities
              in Index Options.
            </p>
            <ul className="text-gray-600 space-y-1">
              <li>
                <strong>Time Horizon:</strong> 1-3 Days
              </li>
              <li>
                <strong>Expected Return:</strong> 75%-150%
              </li>
              <li>
                <strong>Avg Stop Loss:</strong> 50%
              </li>
              <li>
                <strong>Avg R:R Ratio:</strong> 1:3
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 bg-white p-8 rounded-lg shadow-xl transform transition-transform duration-300">
        <h2 className="text-4xl font-semibold text-center mb-8">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* <div className="bg-blue-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"> */}
          <div className="bg-gradient-to-br from-blue-200 to-blue-400 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold mb-4">
              🔔 Automated Trade Notifications
            </h3>

            <p className="text-gray-600">
              Seamlessly navigate your trades with our automated notifications,
              guiding you through every step from entry to exit.
            </p>
          </div>
          {/* <div className="bg-blue-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"> */}
          <div className="bg-gradient-to-br from-purple-200 to-purple-400 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold mb-4">📈 Daily Market Insights</h3>
            <p className="text-gray-600">
              Stay ahead of the curve with our unbiased market updates. Dive
              into real trends through our in-depth analysis and leverage our
              'Trendo Meter' for a comprehensive market perspective.
            </p>
          </div>
          {/* <div className="bg-blue-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"> */}
          <div className="bg-gradient-to-br from-green-200 to-green-400 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold mb-4">💼 Derivatives Expertise</h3>
            <p className="text-gray-600">
              Unlock the power of derivatives analysis with simplified Open
              Interest (OI) and Put-Call Ratio (PCR) data analytics, enhancing
              your understanding of market dynamics.
            </p>
          </div>
          {/* <div className="bg-blue-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"> */}
          <div className="bg-gradient-to-br from-orange-200 to-orange-400 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold mb-4">
              📊 Live Strategy Performance
            </h3>

            <p className="text-gray-600">
              Gain exclusive access to our Live Performance Reports, providing a
              detailed overview of how our strategies are performing in
              real-time.
            </p>
          </div>
        </div>
      </section>

      {/* Subscription Plans Section */}
      <section
        id="subscription"
        className="py-16 bg-blue-50 p-8 rounded-lg shadow-xl"
      >
        <p className="py-20 text-center text-2xl italic font-bold text-blue-800">
          "We are awaiting SEBI Approval to launch our Subscription services,
          current pricing plans are for representation only."
        </p>
        <h2 className="text-4xl font-semibold text-center mb-10">
          Subcription Plan
        </h2>
        <SubscriptionPlan />
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100 rounded-lg shadow-xl">
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">
          What Our Clients Say
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              text: "Amazing calls in Nifty.",
              author: "Tushar Arahant",
            },
            {
              text: "Market Impulse is very helpful.",
              author: "Prashant Vaghela",
            },
            {
              text: "Good trades, & they don't give unnecessary trades.",
              author: "Hardik Roy",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="relative group h-[14em] w-[15em] bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col p-4"
            >
              <div className="circle absolute h-[4em] w-[4em] -top-[2em] -right-[2em] rounded-full bg-[#FF5800] group-hover:scale-[800%] duration-500 z-[-1]"></div>
              <div className="pt-6 flex flex-col items-center justify-center mb-4">
                {/* Stars */}
                <div className="flex gap-1 text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              {/* Information */}
              <p className="text-gray-600 leading-relaxed mb-2 text-center italic group-hover:text-white duration-500">
                "{testimonial.text}"
              </p>
              <div className="author text-sm text-gray-500 text-center font-medium group-hover:text-white duration-500">
                — {testimonial.author}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section
      <section className="py-16 bg-gray-100 rounded-lg shadow-xl">
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">
          What Our Clients Say
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              text: "Amazing calls in Nifty.",
              author: "Tushar Arahant",
            },
            {
              text: "Market Impulse is very helpful.",
              author: "Prashant Vaghela",
            },
            {
              text: "Good trades, & they don't give unnecessary trades.",
              author: "Hardik Roy",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-200 w-72 h-64 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col p-4"
            >
              <div className="flex p-2 gap-1 absolute top-3 left-3">
                <span className="bg-teal-500 inline-block w-3 h-3 rounded-full"></span>
                <span className="bg-orange-500 inline-block w-3 h-3 rounded-full"></span>
                <span className="bg-indigo-500 inline-block w-3 h-3 rounded-full"></span>
              </div>
              <div className="flex flex-col items-center justify-center h-full">
                Stars
                <div className="flex gap-1 text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                Information
                <p className="text-gray-600 leading-relaxed text-center italic mb-2">
                  "{testimonial.text}"
                </p>
                <div className="author text-sm text-gray-500 text-center font-medium">
                  — {testimonial.author}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white text-center  shadow-xl">
        <h2 className="text-4xl font-bold mb-4 animate__animated animate__fadeIn">
          Start Your Trading Journey Today!
        </h2>
        <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Sign up now and unlock access to exclusive trading strategies, tips,
          and tools.
        </p>
        <button
          onClick={handleGetStarted}
          className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-300 transition duration-300"
        >
          Get Started
        </button>
      </section>
    </div>
  );
};

export default Home;
