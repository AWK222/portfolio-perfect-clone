
const Certifications = () => {
  const certificates = [
    {
      title: "Consultancy Accelerator Program",
      issuer: "The University of Life Skills",
      date: "April 2025",
      image: "/lovable-uploads/2c7e0adf-cce6-4f1d-b62f-8b9500d35cc1.png",
      description: "Completed comprehensive program in consultancy, analytical thinking, and professional development"
    },
    {
      title: "Virtual Assistant Programme", 
      issuer: "ALX Virtual Assistant Programme",
      date: "August 2022",
      image: "/lovable-uploads/e09ff18a-ddf7-4862-a9cd-b10441551caa.png",
      description: "Certified in virtual assistance, client management, and administrative support"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional certifications that validate my expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.title}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {cert.title}
                </h3>
                
                <p className="text-pink-600 font-medium mb-2">
                  {cert.issuer}
                </p>
                
                <p className="text-gray-600 mb-3">
                  {cert.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Completed: {cert.date}
                  </span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                    Certified
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
