import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Faq = () => {
  const [showDescriptions, setShowDescriptions] = useState([]);

  const toggleDesc = (index) => {
    setShowDescriptions((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

const faqs = [
{
    question: "How can I join your events?",
    answer: (
        <>
        Attend our weekly <strong>MiyerKULET!</strong> or message us via FB or email. You can check our social media updates for MiyerKULET! schedule or you can pre-register through{" "}
        <a
            href="https://bit.ly/miyerkulet"
            className="underline text-ice-500 hover:text-ice-500"
            target="_blank"
            rel="noopener noreferrer"
        >
            bit.ly/miyerkulet
        </a>.
        </>
    ),
},
  {
    question: "Where do donations go?",
    answer:
      "Funds go directly to our programs—youth workshops, advocacy work, and campaigns.",
  },
  {
    question: "Do you work with schools or orgs?",
    answer:
      "Yes! We offer workshops and partnerships tailored for civil society and academic groups.",
  },
];


  const box = "border-2 border-deep-500 p-1 sm:p-3 rounded-xl my-0 sm:my-1 md:my-2 bg-blue-50";

  return (
    <div className="relative z-10 mt-10 flex flex-col gap-y-2 justify-center items-center">
      <center>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold my-2 sm:my-3 md:my-5 text-deep-500">FAQs</h1>
      </center>
      {faqs.map((faq, index) => (
        <div key={index} className={`${box} w-full`}>
          <div onClick={() => toggleDesc(index)}>
            <div className="flex justify-between items-center">
              <h2 className="font-bold ml-3 mb-2 mt-2 text-deep-500 text-sm sm:text-md md:text-lg">{faq.question}</h2>
              <div className="font-bold">
                {showDescriptions[index] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </div>

            <p
              className={`ml-3 mb-1 transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden max-w-xs sm:max-w-2xl lg:max-w-4xl text-deep-500 text-sm md:text-lg ${
                            showDescriptions[index]
                            ? "max-h-[1000px] opacity-100 mb-5"
                            : "max-h-0 opacity-0"
              }`}
            >
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;