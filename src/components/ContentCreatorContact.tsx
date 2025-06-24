import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContentCreatorContact = () => (
  <section id="content-creator-contact" className="py-20 bg-gray-900">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Content Creator Contact</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Interested in working together or have a collaboration idea? Reach out directly!
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-pink-500 rounded-lg">
            <Mail className="text-white" size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Email</h3>
            <p className="text-gray-400">kabakawambui@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-pink-500 rounded-lg">
            <Phone className="text-white" size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Phone</h3>
            <p className="text-gray-400">+254702044901</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-pink-500 rounded-lg">
            <MapPin className="text-white" size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Location</h3>
            <p className="text-gray-400">Nairobi, Kenya</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContentCreatorContact;
