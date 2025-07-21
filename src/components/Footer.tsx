
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6 ">
      <div className="max-w-6xl mx-auto">
        
        {/* Horizontal Layout */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
          
          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">
                VOLITION
              </span>
            </h2>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-green-400" />
            <p className="text-gray-300 hover:text-green-400 transition-colors">(516)-595-3963</p>
          </div>

          {/* Email */}
          <a href="mailto:projectvolition1@gmail.com" className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-green-400" />
            <p className="text-gray-300 hover:text-green-400 transition-colors">projectvolition1@gmail.com</p>
          </a>

          {/* Location */}
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-green-400" />
            <p className="text-gray-300 hover:text-green-400 transition-colors">New York, USA</p>
          </div>
          
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;