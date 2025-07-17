import Navbar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { Linkedin } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Louis Singe",
      role: "Project Leader",
      image: "/images/sarah.jpg", // Replace with actual image paths
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, esse quod. Repudiandae provident aliquam consequuntur.",
      achievements: "• Biomedical Engineer\n• Working on Degree at RPI\n• Goat",
      linkedin: "https://www.linkedin.com/in/louis-singe/"
    },
    {
      name: "Stephanie Chi",
      role: "Idk what she does tbh", 
      image: "/images/david.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, esse quod. Repudiandae provident aliquam consequuntur.",
      achievements: "• Biology/Psychology Major\n• Working on Degree at SBU\n• J*bless",
      linkedin: ""
    },
    {
      name: "Declan Boyd",
      role: "Idk either",
      image: "/images/maria.jpg", 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, esse quod. Repudiandae provident aliquam consequuntur.",
      achievements: "• Computer Systems Engineering Major\n• Working on Degree at RIT\n• Formerly world's youngest person",
      linkedin: ""
    },
    {
      name: "Dylan Sylwester",
      role: "Idk what my actual title is",
      image: "/images/james.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, esse quod. Repudiandae provident aliquam consequuntur.",
      achievements: "• Computer Science Major\n• Dropout\n• Sometimes researches, sometimes doesn't",
      linkedin: "https://www.linkedin.com/in/dylan-sylwester/"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-bl from-gray-900 via-black to-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 z-10">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-400 rounded-full opacity-60 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Content */}
        <div className="relative z-20 text-center max-w-6xl px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">
              About Us
            </span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8 leading-tight">
            Meet the team behind Volition
          </h2>
        </div>
      </section>

      {/* Team Members */}
      {teamMembers.map((member, index) => (
        <section key={index} className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative">
                  {/* Placeholder for actual image */}
                  <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-green-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-4xl font-bold text-green-400">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <p className="text-green-400 font-semibold">Profile Photo</p>
                    </div>
                  </div>
                  {/* Replace above div with actual image: */}
                  {/* <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
                  /> */}
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>

              {/* Text Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-xl text-green-400 font-semibold mb-6">
                      {member.role}
                    </p>
                  </div>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {member.description}
                  </p>
                  
                  <div className="pt-4">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                    <div className="text-gray-400 whitespace-pre-line">
                      {member.achievements}
                    </div>
                  </div>

                  {/*LinkedIns*/}
                  <div className="pt-6">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-3 bg-green-400/20 hover:bg-green-400/30 border border-green-400/50 hover:border-green-400 text-green-400 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <Linkedin className="w-5 h-5"/>
                      <span className="font-medium">Connect on LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      ))}
      <Footer />

    </div>
  );
};

export default About;