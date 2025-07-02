import React from "react";
import cocaColaLogo from "../assets/coca.cola.png";
import glo365Logo from "../assets/glo 365.png";
import kfcLogo from "../assets/kfc.png";
import number7Logo from "../assets/Number7.png";

const brands = [
  { name: "Coca Cola", logo: cocaColaLogo },
  { name: "Glo 365", logo: glo365Logo },
  { name: "KFC", logo: kfcLogo },
  { name: "Number 7", logo: number7Logo }
];

const BrandsAndPartnerships = () => (
  <section id="brands-partnerships" className="py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-black mb-4">Brands & Partnerships</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          I have collaborated with a variety of brands and partners to create impactful digital experiences.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        {brands.map((brand) => (
          <div key={brand.name} className="flex flex-col items-center">
            <img src={brand.logo} alt={brand.name} className="w-24 h-24 object-contain mb-2 rounded-lg shadow" />
            <span className="text-gray-700 font-medium text-lg text-center">{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BrandsAndPartnerships;
