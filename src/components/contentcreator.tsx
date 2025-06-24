import React from "react";
import wambuiBg from "../assets/wambui black dress.jpg";

const ContentCreator = () => (
  <section
    id="content-creator"
    className="py-20 bg-white relative"
    style={{
      backgroundImage: `url(${wambuiBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* Overlay for readability */}
    <div className="absolute inset-0 bg-white/80 z-0" />
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src={wambuiBg}
          alt="Wambui Kabaka Content Creator"
          className="w-64 h-64 object-cover rounded-2xl shadow-lg border-4 border-pink-200"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold text-black mb-4">Content Creator</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-600 mb-6"></div>
        <p className="text-xl text-gray-700 mb-6">
          I'm a passionate content creator with a flair for blending creativity and strategy to tell stories that connect, inform, and inspire. Whether it's through short-form videos like Reels and TikToks, or creative campaigns, I specialize in crafting engaging digital content that brings brands and experiences to life.
        </p>
        <h3 className="text-lg font-semibold text-pink-600 mb-2">What I Do:</h3>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>Short-form video production (Reels, TikToks)</li>
          <li>Sponsored content & product reviews</li>
          <li>Destination & travel promotions</li>
          <li>Social media campaigns</li>
          <li>Creative copywriting & storytelling</li>
          <li>Audience engagement & community growth</li>
        </ul>
      </div>
    </div>
  </section>
);

export default ContentCreator;
