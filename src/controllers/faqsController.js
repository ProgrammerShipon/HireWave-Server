const { faqsCollection } = require("../collections/collection");

const faqsData = [
  {
    question: "What is your hiring agency all about?",
    answer:
      "We are a professional hiring agency dedicated to connecting businesses with the right talent. Our mission is to help companies find the perfect candidates and assist job seekers in finding their dream careers.",
  },
  {
    question: "How do I submit my resume?",
    answer:
      "You can easily submit your resume through our online portal. Simply navigate to the 'Submit Resume' section on our website and follow the instructions to upload your resume and provide your relevant information.",
  },
  {
    question: "What types of industries do you specialize in?",
    answer:
      "We specialize in a wide range of industries, including technology, healthcare, finance, marketing, and more. Our diverse network allows us to cater to various industry needs and provide top-notch talent solutions.",
  },
  {
    question: "What happens after I submit my application?",
    answer:
      "Once you submit your application, our team will review your resume and qualifications. If your profile matches any current job openings, we will reach out to you for further assessment and potential interviews.",
  },
  {
    question: "Are your services only for job seekers?",
    answer:
      "No, our services benefit both job seekers and employers. We assist job seekers in finding suitable positions and help businesses identify and recruit exceptional candidates who align with their requirements and company culture.",
  },
  {
    question: "How can employers request your hiring services?",
    answer:
      "Employers can get in touch with us through the 'Employers' section on our website. We offer customized hiring solutions tailored to the unique needs of each business. Our team will collaborate closely to ensure the hiring process is efficient and effective.",
  },
];

const faqsInsertMany = async (req, res, next) => {
  try {
    const result = await faqsCollection.insertMany(faqsData);
    return await res.status(200).json(result);
  } catch (error) {
    next(error?.message);
  }
};

const faqsGetData = async (req, res, next) => {
   try {
      const result = await faqsCollection.find({})
   } catch (error) {
      next(error.message)
   }
}

module.exports = { faqsInsertMany, faqsGetData };
