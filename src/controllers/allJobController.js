const { allJobCollection } = require("../collections/collection")

// const userData = [
//   {
//     title: "UI/UX Designer",
//     postedDate: "2023-08-09 07:00 PM",
//     companyName: "Adroit",
//     companyLogo:
//       "https://media.licdn.com/dms/image/C4D0BAQHrtYNljdjm9w/company-logo_100_100/0/1670441499328?e=1700092800&v=beta&t=0KzCPxcN0RYlHpKQkPgTEkoDLQWPpDXoUCBJc1V2Llk",
//     category: "Design & Creative",
//     location: "California",
//     jobType: "remote",
//     salary: "450-900",
//     closingDate: "2023-10-24",
//     experience: "Entry Level",
//     quantity: "02",
//     applied: "56",
//     overview:
//       "We are Uxper. With a presence in more than 60 countries, we’re a growing global organization that helps amazing companies engage with customers through mobile messaging, email, voice and video.",
//     requirements: [
//       "Be heavily involved in turning user stories into testable, maintainable and high-quality code. This is a hands-on code design and coding role!",
//       "Be heavily involved in turning user stories into testable, maintainable and high-quality code. This is a hands-on code design and coding role!",
//     ],
//     skillsExperience: [
//       "You have at least 3 years of experience working as a Product Designer.",
//       "You have experience using Sketch and InVision or Framer X",
//       "You are familiar with using Jira and Confluence in your workflow",
//     ],
//     benefits: [
//       "Competitive compensation package with a meaningful equity stake, rewarding you for your role in the company's sustained success.",
//     ],
//     skills: ["React", "Javascript", "Redux", "MongoDB"],
//   },
//   {
//     title: "Web Development Internship Opportunity",
//     postedDate: "2023-08-15 09:30 AM",
//     companyName: "Numeric",
//     companyLogo:
//       "https://media.licdn.com/dms/image/C560BAQFHEC-DJzR0Gg/company-logo_100_100/0/1663442902561?e=1700092800&v=beta&t=VUNfHrYIXCLxwi3D15wymPsQfvBly73INvLAsOIPwlA",
//     category: "Technology",
//     location: "New York",
//     jobType: "in-person",
//     salary: "Paid internship",
//     closingDate: "2023-09-15",
//     experience: "Internship",
//     quantity: "5",
//     applied: "40",
//     overview:
//       "CodeCrafters is offering an exciting web development internship opportunity for aspiring programmers. Join us to gain hands-on experience in building dynamic and responsive web applications.",
//     requirements: [
//       "Basic knowledge of HTML, CSS, and JavaScript.",
//       "Passion for learning and problem-solving.",
//       "Strong communication skills and ability to work in a team.",
//     ],
//     skillsExperience: [
//       "Experience with front-end frameworks such as React or Vue.",
//       "Understanding of version control (e.g., Git).",
//       "Familiarity with UI/UX design principles.",
//     ],
//     benefits: [
//       "Real-world project experience that will enhance your portfolio.",
//       "Mentorship from experienced developers in the field.",
//       "Networking opportunities with industry professionals.",
//     ],
//     skills: ["HTML", "CSS", "JavaScript", "React", "Git"],
//   },
//   {
//     title: "Marketing Manager",
//     postedDate: "2023-08-10 12:15 PM",
//     companyName: "Prevail",
//     companyLogo:
//       "https://media.licdn.com/dms/image/C560BAQFYYoXrfko87g/company-logo_100_100/0/1656702414708?e=1700092800&v=beta&t=vjjcsTGdjD_WONEaNC5_f1gcmU_pAtkB0kK2tgqRMuk",
//     category: "Marketing",
//     location: "London",
//     jobType: "full-time",
//     salary: "600 - $800",
//     closingDate: "2023-09-10",
//     experience: "Mid-Senior Level",
//     quantity: "1",
//     applied: "45",
//     overview:
//       "Global Innovations is seeking an experienced Marketing Manager to lead our marketing initiatives. Join our dynamic team and contribute to our global brand expansion.",
//     requirements: [
//       "Bachelor's degree in Marketing, Business, or related field.",
//       "Proven experience in developing and implementing successful marketing strategies.",
//       "Strong analytical skills and ability to interpret market trends.",
//     ],
//     skillsExperience: [
//       "Proficiency in digital marketing platforms and tools.",
//       "Excellent communication and leadership skills.",
//       "Experience managing cross-functional teams.",
//     ],
//     benefits: [
//       "Competitive salary with performance-based bonuses.",
//       "Opportunity to shape the company's marketing direction.",
//       "Healthcare and retirement benefits.",
//     ],
//     skills: [
//       "Marketing Strategy",
//       "Digital Marketing",
//       "Team Management",
//       "Market Analysis",
//     ],
//   },
// ];

const insertAllJobController = async (req, res, next) => {
   try {
      // const insertionResult = await allJobCollection.insertMany(userData);
      // res.status(200).json(insertionResult);
   } catch (error) {
      next(error)
   }
}

const getAllJobController = async (req, res, next) => {
   try {
      const Result = await allJobCollection.find({});
      res.status(200).json(Result);
   } catch (error) {
      next(error)
   }
}

module.exports = { insertAllJobController, getAllJobController };