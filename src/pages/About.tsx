import Navbar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { Linkedin } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Louis Singe",
      role: "Project Leader",
      image: `${import.meta.env.BASE_URL}images/louisBioPic.jpg`,
      description: "I specialize in medical devices that utilize machine learning and electromechanical systems to interpret and respond to biosignals. I seek out difficult problems in the medical field and explore innovative solutions. My passion lies in mechanical design— I have designed several prosthetic devices using silicone molding and cable driven techniques and aim for elegant, functional solutions.",
      developmentRoles: "• Developed Ensemble SVM Classification Model\n• Developed EEG Analysis Suite\n• Designed 3 Generations of 3D-Printed Prosthetic hands",
      linkedin: "https://www.linkedin.com/in/louis-singe/"
    },
    {
      name: "Stephanie Chi",
      role: "Head Experiment Designer", 
      image: `${import.meta.env.BASE_URL}images/stephaBioPic.jpg`,
      description: "I am an undergraduate student majoring in Biology and Psychology at Stony Brook University, with a strong interest in human physiology and neuroscience. I am passionate about science communications, explaining complicated information and data, and translating that into the vernacular for the layperson, but want to be knowledgeable about such topics. I have a deep interest in the intersection of biology, chemistry and physics to understand how complex systems function in both the natural and engineered world. I’m especially fascinated by how electrical signals, molecular interactions and mechanical forces come together in the body to produce life as we know it. ",
      developmentRoles: "• Experiment design\n• Data collection\n• Research on hand physical therapy",
      linkedin: "https://www.linkedin.com/in/stephanie-chi-meili/"
    },
    {
      name: "Declan Boyd",
      role: "Head of Control Subsystem",
      image: `${import.meta.env.BASE_URL}images/declanBioPic.jpg`, 
      description: "I’m an undergraduate student at Rochester Institute of Technology where I’m studying Computer Engineering. I am passionate about applying my skills that I’ve developed 	over the years such as my knowledge of low-level programming languages, experience with microcontroller applications, and learned medical knowledge. I’m excited to apply these skills to further develop the connections between man and machine and contribute to the success of this research team in its advances to prosthetics.",
      developmentRoles: "• Development of the Impulse to Movement interpretation system\n• Integration of Microcontroller Control System for articulation\n• Test Subject #1",
      linkedin: "https://www.linkedin.com/in/declan-james-boyd-75b35a358/"
    },
    {
      name: "Dylan Sylwester",
      role: "Software Architect",
      image: `${import.meta.env.BASE_URL}images/dylanBioPic.JPG`,
      description: "I’m an aspiring software engineer, I always try my best to expand my knowledge in this field. I’m almost entirely self taught, learning through AI and YouTube videos to help sharpen my development skills. When I build, I aim to make things easily navigable, efficient, and pretty. Currently, I am working towards becoming a full stack developer, learning and using modern methods like React, Next.js, Supabase, and Vercel while experimenting with different APIs for my next project. I made this website so any feedback would be greatly appreciated!",
      developmentRoles: "• Full Stack Developer\n• Analyzes EEG time series\n• Researcher",
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

                  {/* Replace above div with actual image: */}
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
                  />
                  
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
                    <h4 className="text-lg font-semibold text-white mb-3">Development Roles</h4>
                    <div className="text-gray-400 whitespace-pre-line">
                      {member.developmentRoles}
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