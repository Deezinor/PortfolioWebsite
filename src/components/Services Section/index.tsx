import React from "react";
import { FaCode, FaPaintBrush, FaVrCardboard } from "react-icons/fa";
import ServiceCard from "../ServiceCard";

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 text-center">
          My Services
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 text-center">
          I offer a range of services to help bring your ideas to life, from
          design to development, all tailored to meet your specific needs.
        </p>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <ServiceCard
            link="#XR-Design"
            icon={<FaVrCardboard />}
            title="XR Design"
            description="Specializing in virtual and augmented reality experiences that push the boundaries of immersive technology."
          />
          <ServiceCard
            link="#XR-Design"
            icon={<FaPaintBrush />}
            title="UI/UX Design"
            description="Creating intuitive and engaging designs that provide seamless user experiences across various platforms."
          />
          <ServiceCard
            link="#"
            icon={<FaVrCardboard />}
            title="3D Art"
            description="I create 3D models and visualizations, tailored for games, XR experiences, and product design."
          />
          <ServiceCard
            link="#XR-Design"
            icon={<FaCode />}
            title="Web Development"
            description="I build responsive and performant web applications using modern technologies like React, TypeScript, and Tailwind CSS."
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
