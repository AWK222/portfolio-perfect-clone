const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white relative"
      style={{
        backgroundImage: `url(/lovable-uploads/8afbe44e-7f81-44ee-8473-6e9f58cf2aa9.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/80 md:bg-white/70 z-0" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a Social Media & Marketing Consultant, Virtual Assistant, and Content Creator all rolled into one efficient, creative powerhouse. I help brands grow, stay organized, and show up online with purpose and personality.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you need a strategy, a fresh post, or just someone to handle the chaos behind the scenes — I'm your person.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                3+ Years Experience
              </span>
              <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                Multi-Platform Expert
              </span>
              <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                Creative Powerhouse
              </span>
            </div>
          </div>
          
          {/* Removed the inner image since the background is now set on the section */}
        </div>
      </div>
    </section>
  );
};

export default About;
