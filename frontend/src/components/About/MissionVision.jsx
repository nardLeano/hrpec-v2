import React from "react";

const MissionVision = () => {
  return (
    <section className="w-full py-10 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="bg-sky-500/10 rounded-3xl p-10 text-deep-500 shadow-sm">
          <div className="flex flex-col sm:flex-row gap-6 md:gap-12 text-center">
            
            {/* Mission */}
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-4xl font-bold">Mission</h2>
              <p className="text-md md:text-lg leading-relaxed">
                To empower communities to advance the cause of human rights through advocacy,
                cultural work, and participatory learning.
              </p>
            </div>

            {/* Vision */}
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-4xl font-bold">Vision</h2>
              <p className="text-md md:text-lg leading-relaxed">
                A society where rights are realized, protected, and guaranteed for everyone.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
