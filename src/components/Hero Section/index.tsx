import React from "react";
import JakeBoulton from "../../assets/images/Jake_Boulton.jpg";



const HeroSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-24" id="#home">
      <div className="container max-w-screen-xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          {/* <div className="flex items-center mb-4">
            <span className="bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full">
              What's new
            </span>
            <span className="ml-2 text-gray-600">Just shipped v1.0.0 →</span>
          </div> */}

          <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-gray-900">
            Hi there, <br />
            I'm <span className="text-blue-700">Jake Boulton</span>
          </h1>

          <p className="text-lg text-gray-600 mb-6 mr-6 max-w-prose">
            I’m an XR designer specializing in intuitive, award-winning VR/AR
            interfaces that blend creative vision with technical precision. I
            excel in creating user-centered experiences, pushing the boundaries
            of immersive design.
          </p>

          <div className="flex items-center space-x-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Contact Me
            </a>
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Learn More →
            </a>
          </div>
        </div>

        {/* Right Image/Code Snippet */}
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 transform rotate-3"></div>
            <img
              src={JakeBoulton}
              alt="A young man wearing a graduation gown and cap smiles at the camera. He is dressed in a pinstripe suit and tie, standing in a brightly lit indoor space with a blurred background."
              className="relative rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
