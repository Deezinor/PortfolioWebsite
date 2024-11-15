// src/components/ProjectsSection.tsx
import React from "react";

const projects = [
  {
    imageUrl: "./src/assets/images/placeholder-image.webp",
    title: "BeatBox VR",
    description:
      "A VR drumming simulator that helps beginners and experts alike to learn, practice, and play drums. Winner of the Jury Prize at the Innovate UK Immersive Tech Awards 2024.",
    link: "#", // Replace with the actual link when available
  },
  {
    imageUrl: "./src/assets/images/placeholder-image.webp",
    title: "Midnight at the Pagoda",
    description:
      "An award-winning virtual heritage exhibit set in the Great Bao'en Temple museum in Nanjing, China. It won Best Use of Technology at Digital Heritage 2024.",
    link: "#", // Replace with the actual link when available
  },
  {
    imageUrl: "./src/assets/images/placeholder-image.webp",
    title: "Habibi",
    description:
      "A project for the Meta Quest 3 that bridges the gap for those in long-distance relationships, allowing users to share written notes, images, and objects on a virtual wall, powered by AI.",
    link: "#", // Replace with the actual link when available
  },
  {
    imageUrl: "./src/assets/images/placeholder-image.webp",
    title: "GoFish",
    description:
      "A mixed reality game called MR GoFish, where players can engage in fishing-like activities in an immersive environment.",
    link: "#", // Replace with the actual link when available
  },
  {
    imageUrl: "./src/assets/images/placeholder-image.webp",
    title: "Pancake",
    description:
      "Pancake was a creative and collaborative project, offering a fun and interactive experience.",
    link: "#", // Replace with the actual link when available
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-10 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
