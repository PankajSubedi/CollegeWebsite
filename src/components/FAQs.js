import React, { useState } from "react";
import FAQItem from "../components/FAQItem";
import "../css/faqs.css"; // Import your custom styles

function FAQs() {
  const faqs = [
    {
      question: "1.What courses does your college offer?",
      answer:
        'Our college offers a wide range of undergraduate and postgraduate programs across various disciplines, including engineering, business, computer science, arts, and more. Please visit our "Courses" section for a detailed list of available programs.',
    },
    {
      question: "2. How do I apply for admission?",
      answer:
        'To apply for admission, please visit our "Admissions" page and follow the application instructions. You will find information on admission requirements, application forms, and deadlines.',
    },
    {
      question: "3. Are scholarships available for students?",
      answer:
        'Yes, we offer scholarships and financial aid to eligible students. Our college believes in recognizing academic achievements and supporting deserving students. Visit the "Scholarships" section for more details and application procedures.',
    },
    {
      question: "4. What are the facilities available on campus?",
      answer:
        "Our campus provides state-of-the-art facilities, including well-equipped libraries, modern laboratories, sports complexes, computer centers, and student activity spaces. We prioritize the well-being and comfort of our students.",
    },
    {
      question: "5. Is there on-campus housing for students?",
      answer:
        "Yes, we offer on-campus housing options for students. Our residential halls provide a safe and supportive environment that encourages a sense of community and fosters personal growth.",
    },
    {
      question: "6. Can international students apply?",
      answer:
        "Absolutely! We welcome international students from around the world. Our college is committed to fostering a diverse and inclusive learning environment. International applicants can find relevant information on our International Students page.",
    },
    {
      question: "7. What is the student-to-faculty ratio?",
      answer:
        "Our college maintains a low student-to-faculty ratio to ensure personalized attention and a conducive learning experience. Our dedicated faculty members are readily available to support students in their academic journey.",
    },
    {
      question:
        "8. Does the college have career services and placement support?",
      answer:
        "Yes, we offer comprehensive career services and placement support. Our Career Development Center assists students in career exploration, internships, and job placements. We have strong connections with industry partners to help students find meaningful employment opportunities.",
    },
    {
      question: "9. Is the campus accessible for students with disabilities?",
      answer:
        "Yes, our campus is designed to be accessible to all students. We prioritize inclusivity and provide facilities and resources to support students with disabilities. For specific accommodations, please contact our Student Support Services.",
    },
    {
      question:
        "10. Can I get involved in extracurricular activities and clubs?",
      answer:
        "Absolutely! We encourage students to explore their interests and passions beyond academics. Our college offers a wide range of extracurricular activities, student organizations, and clubs for students to join and enhance their overall college experience.",
    },

    // ... More FAQs
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faqs-container">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={index === openIndex}
          onItemClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
}

export default FAQs;
