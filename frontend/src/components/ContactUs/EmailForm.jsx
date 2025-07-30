import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please fill out your name";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please input a valid email";
    if (!formData.subject.trim()) newErrors.subject = "Please fill out subject";
    if (!formData.message.trim()) newErrors.message = "Please write a message";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await fetch("https://getform.io/f/bdrgzwnb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Submission failed:", error);
      alert("There was an issue sending your message. Please try again.");
    }

    setTimeout(() => {
      setSubmitted(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 5000);
  };

  if (submitted) {
    return (
      <div className="bg-ice-500 p-3 sm:p-6 rounded-2xl shadow text-deep-500 text-md sm:text-lg">
        <p className="text-md sm:text-lg font-semibold mb-4">Your message has been sent!</p>
        <p>
          Please wait for a couple of days for the confirmation of your email. If you do not receive a confirmation within 2–3 days, please send another message and make sure that the email you provide is correct and working. Thank you!
        </p>
        <p className="mt-4">Love, HRPEC</p>

        <Button
          className="bg-ice-500 text-white text-lg font-bold px-6 py-3 transition-transform duration-200 ease-in-out hover:scale-110 hover:bg-sky-500 cursor-pointer"
          onClick={() => setSubmitted(false)}
        >
          Okay
        </Button>
      </div>
    );
  }

  return (
    <form className="mt-4 sm:mt-0 space-y-4 text-md sm:text-lg" onSubmit={handleSubmit}>
      <div>
        <label className="block mb-1 font-semibold">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Full Name or Organization Name"
          className="w-full border border-gray-300 bg-white rounded-lg px-4 py-2"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div>
        <label className="block mb-1 font-semibold">Email</label>
        <input
          type="email"
          name="email"
          placeholder="example@email.com"
          className="w-full border border-gray-300 bg-white rounded-lg px-4 py-2"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div>
        <label className="block mb-1 font-semibold">Subject</label>
        <input
          type="text"
          name="subject"
          placeholder="What is it about?"
          className="w-full border border-gray-300 bg-white rounded-lg px-4 py-2"
          value={formData.subject}
          onChange={handleChange}
        />
        {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
      </div>

      <div>
        <label className="block mb-1 font-semibold">Message</label>
        <textarea
          name="message"
          placeholder="Write your message here..."
          className="w-full border border-gray-300 bg-white rounded-lg px-4 py-2 min-h-[120px]"
          rows={formData.message.length > 300 ? 6 : 4}
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </div>

      <Button
        type="submit"
        className={`bg-ice-500 text-white text-lg font-bold px-6 py-3 transition-transform duration-200 ease-in-out hover:scale-110 hover:bg-sky-500 cursor-pointer ${
          Object.keys(errors).length === 0 ? "" : "opacity-60 cursor-pointer"
        }`}
      >
        Submit
      </Button>
    </form>
  );
};

export default EmailForm;
