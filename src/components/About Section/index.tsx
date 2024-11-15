import React from "react";
import PlaceHolder from "../../assets/images/placeholder-image.webp"

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-16 lg:py-24" id="about">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 text-center">
          About Me
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 text-center">
          I am a passionate XR designer and developer focused on creating immersive experiences that connect people in innovative ways. With a strong background in UI/UX design, I specialize in building cohesive and engaging digital environments.
        </p>

        {/* Key Points or Highlights */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex items-start">
            <span className="text-blue-600 text-2xl mr-4">•</span>
            <p className="text-lg text-gray-600">
              Experienced in creating polished and immersive XR applications that push the boundaries of design and interaction.
            </p>
          </div>

          <div className="flex items-start">
            <span className="text-blue-600 text-2xl mr-4">•</span>
            <p className="text-lg text-gray-600">
              Skilled in both front-end and XR development using React, Unity, and Unreal Engine, with a focus on seamless user experiences.
            </p>
          </div>

          <div className="flex items-start">
            <span className="text-blue-600 text-2xl mr-4">•</span>
            <p className="text-lg text-gray-600">
              Dedicated to bridging the gap between technology and human connection through thoughtful design and innovative solutions.
            </p>
          </div>
        </div>

        {/* Image or Visual Element */}
        <div className="mt-12 text-center">
          <img
            src={PlaceHolder}
            alt="Jake Boulton"
            className="rounded-xl shadow-lg max-w-xs mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
