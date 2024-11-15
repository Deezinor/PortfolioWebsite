import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  link,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:-translate-y-2">
      <a href={link} className="flex flex-col items-center justify-center">
          <div className="text-blue-600 text-4xl mb-4">{icon}</div>
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
      </a>
    </div>
  );
};

export default ServiceCard;
