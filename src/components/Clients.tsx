import React from "react";
import jazaLogo from "../assets/jaza logo.jpeg";
import thaiLogo from "../assets/thai.jpeg";
import nkcLogo from "../assets/nkc logo.jpeg";

const clients = [
  { name: "Jaza", logo: jazaLogo },
  { name: "Thai", logo: thaiLogo },
  { name: "NKC", logo: nkcLogo }
];

const Clients = () => (
  <section id="clients" className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-black mb-4">Clients</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Brands and businesses I've had the pleasure to work with
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        {clients.map((client) => (
          <div key={client.name} className="flex flex-col items-center">
            <img src={client.logo} alt={client.name} className="w-24 h-24 object-contain mb-2 rounded-lg shadow" />
            <span className="text-gray-700 font-medium text-lg text-center">{client.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Clients;
