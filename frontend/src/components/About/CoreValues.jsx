import React from "react";
import {
  FaBalanceScale,
  FaHandsHelping,
  FaRegHandshake,
  FaLightbulb,
  FaComments,
  FaUsers,
  FaUniversity,
} from "react-icons/fa";

const values = [
  {
    title: "Guided by UDHR",
    icon: <FaBalanceScale />,
    description:
      "We believe in the principles of human rights established in the UDHR and its subsequent instruments. As the world evolves, so may the scope of human rights—but our grounding remains in these foundational principles.",
  },
  {
    title: "Inclusivity & Equal Opportunity",
    icon: <FaHandsHelping />,
    description:
      "We respect and value every individual, regardless of identity or status. In an environment free from discrimination and systemic barriers, everyone can flourish and contribute to society.",
  },
  {
    title: "Commitment to Impartiality",
    icon: <FaRegHandshake />,
    description:
      "Our work focuses on the universal realization of human rights—not political agendas. While we collaborate with many, our only bias is towards the fulfillment of human rights.",
  },
  {
    title: "Rights Begin With Awareness",
    icon: <FaLightbulb />,
    description:
      "Learning our rights prepares us to advocate effectively. This knowledge is not dictated but drawn from within, empowering communities to take part in social change.",
  },
  {
    title: "Spaces for Discourse",
    icon: <FaComments />,
    description:
      "Human rights thrive in spaces where we are free to gather, express, and engage in dialogue. We promote these spaces as vital expressions of our fundamental freedoms.",
  },
  {
    title: "Empowerment Over Imposition",
    icon: <FaUsers />,
    description:
      "We prioritize participatory, long-term methods rooted in lived experience. We believe in working alongside communities—not speaking over them.",
  },
  {
    title: "Engaging All Sectors",
    icon: <FaUniversity />,
    description:
      "A just society needs civic participation and government accountability. We connect people, civil society, and public institutions to realize rights as lived realities.",
  },
];

const CoreValues = () => {
  return (
    <section className="w-full mb-10">
      <div className="max-w-6xl mx-auto px-4 text-deep-500">
        <h2 className="text-4xl font-bold text-center mb-10">Our Core Values</h2>

        <div className="grid gap-8 grid-col sm:grid-cols-2 md:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-sky-500/10 rounded-2xl shadow p-10 flex flex-col items-center text-center"
            >
              {/* Icon Circle */}
              <div className="w-14 h-14 rounded-full bg-deep-500 flex items-center justify-center mb-4">
                {React.cloneElement(value.icon, { size: 24, className: "text-white" })}
              </div>

              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-md md:text-lg leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
