const MissionStatement = () => {
    return(
        <section className="py-5 px-6 bg-gradient-to-bl from-gray-900 via-black to-gray-800">
            <div className="max-w-6xl mx-auto">
                <div className="mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-4">
                        Mission Statement
                    </h2>
                </div>

                {/* Vision & Mission Grid */}
                <div className="grid md:grid-cols-2 gap-10 mb-5">
                  
                  {/* Our Vision */}
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-white/70 flex items-center gap-2">
                      Our Vision
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base">
                        There's a gap in advanced prosthetic devices and accessible prosthetic devices that must be filled if we are to aid people in all walks of life. It’s not just about making something that’s good enough, it’s about creating a functional model of the motor commands and interpreting them to restore quality of life to those afflicted by limb loss. Our system is built to generalize to everyone and operate on the level of the most complex human limbs. Restoring users' volition, with no limit.
                    </p>
                  </div>

                  {/* Our Mission */}
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-white/70 flex items-center gap-2">
                      Our Mission
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base">
                      We aim to develop both mechanical and software systems to rehabilitate those suffering from limb loss. The first system is a device that records EEG data at the scalp and feeds this to a ST-GNN classification model that can interpret event related potentials into action. The second system is the device that interprets and carries out the action or series of actions- the mechanical limb. In combination, these systems recreate the top down motor control process to restore functionality to the patient’s lost limb and improve quality of life.
                    </p>
                  </div>
                  
                </div>


            </div>

        



        
        </section>
    );
};

export default MissionStatement;