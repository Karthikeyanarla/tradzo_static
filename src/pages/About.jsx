import React from "react";
import img1 from "../assets/found1.jpeg";
import img2 from "../assets/found2.jpeg";

const About = () => {
  return (
    <section className="about-section py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-center mb-12 text-gray-900 tracking-tight">
          About Us
        </h1>

        {/* Our Story */}
        <div className="mb-12 flex flex-col-reverse md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Story</h2>
            <p className="text-lg leading-relaxed text-justify">
              Tradzo Technologies Private Limited is a DPIIT Recognized Startup
              based in Ahmedabad, Gujarat. Tradzo is set to revolutionize
              financial markets in India with transparency and technological
              innovations to simplify capital market investments.
            </p>
          </div>
        </div>

        {/* About the Founders */}
        <div className="mb-12 flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={img1}
              alt="Harsh Patel - Founder"
              className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out max-w-xs mx-auto"
            />
          </div>
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-blue-600">
              Harsh Patel - Founder
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              With over a decade immersed in financial markets and equities
              research, Harsh is the dynamic force propelling Tradzo forward.
              His visionary leadership and deep industry expertise are
              instrumental in shaping Tradzo's path-breaking journey in the
              finance sector.
            </p>
          </div>
        </div>

        <div className="mb-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={img2}
              alt="Shweta Patel - Co-Founder"
              className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out max-w-xs mx-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-blue-600">
              Shweta Patel - Co-Founder
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              Shweta is at the helm of Tradzo, transforming its vision into a
              renowned brand. Holding a PGDM in Banking & Finance from NIBM
              Pune, she combines her financial acumen with expert skills in
              digital marketing and branding to lead Tradzo towards innovation
              and market leadership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
