
const GradientBackground = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      
      {/* Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-30"
      >
        <source src={`${import.meta.env.BASE_URL}Videos/background.mp4`} type="video/mp4" />
      </video>
      
      {/* Content */}
      <div className="relative z-20 text-center max-w-6xl px-6">
        
        {/* Main Gradient Heading */}
        <h1 className="text-8xl md:text-9xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">
            Project Volition
          </span>
        </h1>
        
        {/* Subheading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-12 leading-tight">
          Connecting Mind To Matter
        </h2>
        
        {/* Description */}
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            We’re willing prosthesis technology into the next age with leading techniques in neural mapping to understand the language of action.
          </p>
          
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            See how we accomplish this in our EEG analysis tool, our ST–GNN, and prosthetic hand device.
          </p>
        </div>
        
        {/* Call to Action */}
        <div className="mt-12">
        </div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
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
      
    </section>
  );
};

export default GradientBackground;