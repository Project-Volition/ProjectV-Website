const MissionStatement = () => {
    return(
        <section className="py-20 px-6 bg-gradient-to-bl from-gray-900 via-black to-gray-800">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-4">
                        Mission Statement
                    </h2>
                </div>

                {/* Vision & Mission Grid */}
                <div className="grid md:grid-cols-2 gap-16 mb-20">
                  
                  {/* Our Vision */}
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-white/70 flex items-center gap-2 underline decoration-white/80">
                      Our Vision
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsa ullam dolorum ex temporibus odio atque dicta, exercitationem in a rem tempore assumenda voluptatum facilis fuga quisquam. Dignissimos officiis eum sint cumque porro repudiandae dolorum! ipsum dolor sit amet consectetur adipisicing elit. Accusantium veniam quos enim pariatur minus delectus quas, doloremque reiciendis. Illo magnam repudiandae quibusdam dolorem mollitia officia assumenda ad eos.
                    </p>
                  </div>

                  {/* Our Mission */}
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-white/70 flex items-center gap-2 underline decoration-white/80">
                      Our Mission
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum assumenda nulla porro omnis iusto tenetur commodi, optio, cum tempora in. Reprehenderit mollitia veniam, vel quasi dolores numquam illum sapiente repudiandae voluptatem eveniet ratione illo., ipsum dolor sit amet consectetur adipisicing elit. At, quis! Aliquam facilis nobis magni fuga! Nobis eaque esse magni iusto rem necessitatibus, porro facilis quae mollitia omnis repellat.
                    </p>
                  </div>
                  
                </div>


            </div>

        



        
        </section>
    );
};

export default MissionStatement;