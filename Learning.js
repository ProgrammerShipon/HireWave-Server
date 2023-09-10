const data = [
  {
    name: "Olivia Johnson",
    email: "OliviaJohnson@gmail.com",
    image: "https://i.ibb.co/jDPFM9F/req-1.jpg",
    title: "Mern Stack Developer | React Developer",
    phone: ["+12", "1202-1281"],
    category: "Frontend Developer",
    hourlyRate: "20",
    jobType: "As Needed - Open to work",
    location: ["Los Angeles", "CA"],
    address: "Uttara Model Town, 1230",
    skills: ["JavaScript", "React", "Node.js"],
    about: [
      "Hello there! My name is Olivia Johnson. I am a frontend developer, and I’m very passionate and dedicated to my work. With 5 years of experience as a professional frontend developer, I have acquired the skills and knowledge necessary to make your project a success.",
      "",
      "a professional frontend developer, I have acquired the skills and knowledge necessary to make your project a success.",
    ],
    education: [
      {
        institute: "University of California, Los Angeles",
        subject: "Bachelor in Computer Science",
        startDate: "Sep 01, 2016",
        endDate: "June 15, 2020",
      },
    ],
    experience: [
      {
        position: "Frontend Developer",
        companyName: "Adroit",
        location: "Los Angeles, CA",
        startDate: "July 01, 2020",
        endDate: "Present",
      },
    ],
    socialLink: [
      {
        linkedin: "https://www.linkedin.com/in/emmadavis/",
      },
      {
        github: "https://www.github.com/emmadavis/",
      },
      {
        twitter: "https://www.twitter.com/emmadavis/",
      },
      {
        facebook: "https://www.twitter.com/emmadavis/",
      },
    ],
    languages: [
      {
        name: "English",
        level: "fluent",
      },
      {
        name: "Spanish",
        level: "comfortable",
      },
    ],
    recommendations: 2,
    status: "approved",
    active: true,
    viewsCount: 0,
    visibility: "visible",
    joinDate: "Aug 19, 2020",
  },
  {
    name: "Emma Davis",
    email: "EmmaDavis@example.com",
    image: "https://i.ibb.co/41bpfKJ/req-2.jpg",
    title: "UX Designer",
    phone: ["+34", "9876-5432"],
    category: "Web Designer",
    hourlyRate: "25",
    jobType: "Full-time",
    location: ["San Francisco", "CA"],
    address: "123 Main Street, Apt 45",
    skills: ["UI/UX Design", "Wireframing", "Prototyping"],
    about: [
      "Hello, I'm Emma Davis, a passionate UX designer with a strong focus on creating user-friendly and visually appealing interfaces.",
      "I believe that good design can enhance user experiences and bring value to businesses.",
    ],
    education: [
      {
        institute: "California State University",
        subject: "Bachelor in Interaction Design",
        startDate: "Sep 01, 2015",
        endDate: "June 15, 2019",
      },
    ],
    experience: [
      {
        position: "UX Designer",
        companyName: "DigitalCraft",
        location: "San Francisco, CA",
        startDate: "July 01, 2019",
        endDate: "Present",
      },
      {
        position: "UI Designer",
        companyName: "CreativeSolutions",
        location: "Los Angeles, CA",
        startDate: "Jan 15, 2017",
        endDate: "June 30, 2019",
      },
    ],
    socialLink: [
      {
        linkedin: "https://www.linkedin.com/in/emmadavis/",
      },
      {
        github: "https://www.github.com/emmadavis/",
      },
      {
        twitter: "https://www.twitter.com/emmadavis/",
      },
      {
        facebook: "https://www.twitter.com/emmadavis/",
      },
    ],
    languages: [
      {
        name: "English",
        level: "fluent",
      },
      {
        name: "Spanish",
        level: "basic",
      },
    ],
    recommendations: 5,
    status: "approved",
    active: true,
    earning: 0,
    viewsCount: 0,
    visibility: "visible",
    joinDate: "Oct 10, 2019",
  },
  {
    name: "John Anderson",
    email: "John.Anderson@example.com",
    image: "https://digity.netlify.app/assets/images/team/1.png",
    title: "Software Engineer",
    phone: ["+1", "555-1234"],
    category: "Backend Developer",
    hourlyRate: "30",
    jobType: "Full-time",
    location: ["New York", "NY"],
    address: "456 Elm Street, Apt 22",
    skills: ["Java", "Python", "Databases"],
    about: [
      "Hello, I'm John Anderson, a software engineer with a passion for building robust and scalable applications.",
      "I enjoy solving complex problems and collaborating with teams to deliver high-quality software.",
    ],
    education: [
      {
        institute: "Columbia University",
        subject: "Bachelor in Computer Science",
        startDate: "Sep 01, 2013",
        endDate: "June 15, 2017",
      },
    ],
    experience: [
      {
        position: "Software Engineer",
        companyName: "TechCorp",
        location: "New York, NY",
        startDate: "July 01, 2017",
        endDate: "Present",
      },
      {
        position: "Junior Developer",
        companyName: "CodeMasters",
        location: "San Francisco, CA",
        startDate: "Feb 15, 2016",
        endDate: "June 30, 2017",
      },
    ],
    socialLink: [
      {
        linkedin: "https://www.linkedin.com/in/emmadavis/",
      },
      {
        github: "https://www.github.com/emmadavis/",
      },
      {
        twitter: "https://www.twitter.com/emmadavis/",
      },
      {
        facebook: "https://www.twitter.com/emmadavis/",
      },
    ],
    languages: [
      {
        name: "English",
        level: "fluent",
      },
      {
        name: "French",
        level: "intermediate",
      },
    ],
    recommendations: 7,
    status: "approved",
    active: false,
    earning: 0,
    viewsCount: 0,
    visibility: "visible",
    joinDate: "May 5, 2017",
  },
  {
    name: "Sophia Martinez",
    email: "Sophia.Martinez@example.com",
    image: "https://i.ibb.co/nbjYRxQ/req-5.jpg",
    title: "Graphic Designer",
    phone: ["+1", "555-5678"],
    category: "Creative Designer",
    hourlyRate: "35",
    jobType: "Freelance",
    location: ["Chicago", "IL"],
    address: "789 Maple Avenue, Suite 10",
    skills: ["Adobe Illustrator", "Photoshop", "Typography"],
    about: [
      "Hi, I'm Sophia Martinez, a creative graphic designer with a love for visual storytelling.",
      "I specialize in crafting engaging and memorable designs that leave a lasting impression.",
    ],
    education: [
      {
        institute: "Art Institute of Chicago",
        subject: "Bachelor in Graphic Design",
        startDate: "Sep 01, 2014",
        endDate: "June 15, 2018",
      },
    ],
    experience: [
      {
        position: "Graphic Designer",
        companyName: "Artistic Designs",
        location: "Chicago, IL",
        startDate: "July 01, 2018",
        endDate: "Present",
      },
      {
        position: "Junior Designer",
        companyName: "Creative Studios",
        location: "Los Angeles, CA",
        startDate: "Feb 15, 2017",
        endDate: "June 30, 2018",
      },
    ],
    socialLink: [
      {
        linkedin: "https://www.linkedin.com/in/emmadavis/",
      },
      {
        github: "https://www.github.com/emmadavis/",
      },
      {
        twitter: "https://www.twitter.com/emmadavis/",
      },
      {
        facebook: "https://www.twitter.com/emmadavis/",
      },
    ],
    languages: [
      {
        name: "English",
        level: "fluent",
      },
      {
        name: "Spanish",
        level: "intermediate",
      },
    ],
    recommendations: 4,
    status: "approved",
    active: true,
    earning: 0,
    earning: 0,
    viewsCount: 0,
    visibility: "visible",
    joinDate: "June 20, 2018",
  },
  {
    name: "Daniel Williams",
    email: "Daniel.Williams@example.com",
    image: "https://digity.netlify.app/assets/images/team/7.png",
    title: "Full Stack Developer",
    phone: ["+1", "555-9876"],
    category: "Software Engineer",
    hourlyRate: "40",
    jobType: "Remote",
    location: ["Austin", "TX"],
    address: "321 Oak Street, Apt 8",
    skills: ["JavaScript", "Python", "React", "Node.js"],
    about: [
      "Hello, I'm Daniel Williams, a full stack developer passionate about creating web applications.",
      "I have a strong background in both frontend and backend development and love tackling challenging projects.",
    ],
    education: [
      {
        institute: "University of Texas at Austin",
        subject: "Bachelor in Computer Science",
        startDate: "Sep 01, 2012",
        endDate: "June 15, 2016",
      },
    ],
    experience: [
      {
        position: "Full Stack Developer",
        companyName: "Tech Innovations",
        location: "Austin, TX",
        startDate: "July 01, 2016",
        endDate: "Present",
      },
      {
        position: "Frontend Developer",
        companyName: "Web Wizards",
        location: "San Francisco, CA",
        startDate: "Feb 15, 2015",
        endDate: "June 30, 2016",
      },
    ],
    socialLink: [
      {
        linkedin: "https://www.linkedin.com/in/emmadavis/",
      },
      {
        github: "https://www.github.com/emmadavis/",
      },
      {
        twitter: "https://www.twitter.com/emmadavis/",
      },
      {
        facebook: "https://www.twitter.com/emmadavis/",
      },
    ],
    languages: [
      {
        name: "English",
        level: "fluent",
      },
      {
        name: "German",
        level: "basic",
      },
    ],
    recommendations: 6,
    status: "approved",
    active: false,
    earning: 0,
    viewsCount: 0,
    visibility: "visible",
    joinDate: "May 10, 2016",
  },
  {
    name: "Ava Johnson",
    email: "Ava.Johnson@example.com",
    image: "https://digity.netlify.app/assets/images/team/8.png",
    title: "Digital Marketer",
    phone: ["+1", "555-5432"],
    category: "Marketing Specialist",
    hourlyRate: "35",
    jobType: "Freelance",
    location: ["Miami", "FL"],
    address: "567 Beach Blvd, Suite 12",
    skills: ["Social Media Marketing", "SEO", "Content Strategy"],
    about: [
      "Hi, I'm Ava Johnson, a digital marketer with a passion for creating effective online marketing strategies.",
      "I have a proven track record of driving brand awareness and engagement through various digital channels.",
    ],
    education: [
      {
        institute: "University of Florida",
        subject: "Bachelor in Marketing",
        startDate: "Sep 01, 2013",
        endDate: "June 15, 2017",
      },
    ],
    experience: [
      {
        position: "Digital Marketing Specialist",
        companyName: "Digital Marketing Pros",
        location: "Miami, FL",
        startDate: "July 01, 2017",
        endDate: "Present",
      },
      {
        position: "Social Media Manager",
        companyName: "Social Buzz",
        location: "Los Angeles, CA",
        startDate: "Feb 15, 2016",
        endDate: "June 30, 2017",
      },
    ],
    socialLink: [
      {
        linkedin: "https://www.linkedin.com/in/emmadavis/",
      },
      {
        github: "https://www.github.com/emmadavis/",
      },
      {
        twitter: "https://www.twitter.com/emmadavis/",
      },
      {
        facebook: "https://www.twitter.com/emmadavis/",
      },
    ],
    languages: [
      {
        name: "English",
        level: "fluent",
      },
      {
        name: "Spanish",
        level: "intermediate",
      },
    ],
    recommendations: 4,
    status: "approved",
    active: true,
    earning: 0,
    viewsCount: 0,
    visibility: "visible",
    joinDate: "June 20, 2017",
  },
  {
    name: "Oliver Wilson",
    email: "Oliver.Wilson@example.com",
    image: "https://digity.netlify.app/assets/images/team/4.png",
    title: "Data Analyst",
    phone: ["+1", "555-4321"],
    category: "Data Science",
    hourlyRate: "45",
    jobType: "Full-time",
    location: ["Seattle", "WA"],
    address: "789 Pine Street, Suite 5",
    skills: ["Data Analysis", "Python", "SQL", "Data Visualization"],
    about: [
      "Hi, I'm Oliver Wilson, a data analyst with a passion for extracting insights from data.",
      "I enjoy working with data to uncover meaningful trends and patterns that drive decision-making.",
    ],
    education: [
      {
        institute: "University of Washington",
        subject: "Bachelor in Data Science",
        startDate: "Sep 01, 2015",
        endDate: "June 15, 2019",
      },
    ],
    experience: [
      {
        position: "Data Analyst",
        companyName: "Data Insights",
        location: "Seattle, WA",
        startDate: "July 01, 2019",
        endDate: "Present",
      },
      {
        position: "Research Assistant",
        companyName: "Tech Research Institute",
        location: "San Francisco, CA",
        startDate: "Feb 15, 2018",
        endDate: "June 30, 2019",
      },
    ],
    socialLink: [
      {
        linkedin: "https://www.linkedin.com/in/emmadavis/",
      },
      {
        github: "https://www.github.com/emmadavis/",
      },
      {
        twitter: "https://www.twitter.com/emmadavis/",
      },
      {
        facebook: "https://www.twitter.com/emmadavis/",
      },
    ],
    languages: [
      {
        name: "English",
        level: "fluent",
      },
      {
        name: "Spanish",
        level: "basic",
      },
    ],
    recommendations: 5,
    status: "approved",
    active: true,
    earning: 0,
    viewsCount: 0,
    visibility: "visible",
    joinDate: "May 10, 2019",
  },
  {
    name: "Mia Anderson",
    email: "Mia.Anderson@example.com",
    image: "https://digity.netlify.app/assets/images/team/6.png",
    title: "UI/UX Designer",
    phone: ["+1", "555-8765"],
    category: "Design",
    hourlyRate: "40",
    jobType: "Freelance",
    location: ["San Diego", "CA"],
    address: "123 Beach Avenue, Apt 15",
    skills: ["UI/UX Design", "Wireframing", "Prototyping", "Adobe XD"],
    about: [
      "Hello, I'm Mia Anderson, a UI/UX designer passionate about creating intuitive and visually appealing interfaces.",
      "I believe that great design enhances user experiences and helps businesses succeed.",
    ],
    education: [
      {
        institute: "San Diego State University",
        subject: "Bachelor in Interaction Design",
        startDate: "Sep 01, 2014",
        endDate: "June 15, 2018",
      },
    ],
    experience: [
      {
        position: "UI/UX Designer",
        companyName: "Design Innovators",
        location: "San Diego, CA",
        startDate: "July 01, 2018",
        endDate: "Present",
      },
      {
        position: "Junior Designer",
        companyName: "Creative Studios",
        location: "Los Angeles, CA",
        startDate: "Feb 15, 2017",
        endDate: "June 30, 2018",
      },
    ],
    socialLink: [
      {
        linkedin: "https://www.linkedin.com/in/emmadavis/",
      },
      {
        github: "https://www.github.com/emmadavis/",
      },
      {
        twitter: "https://www.twitter.com/emmadavis/",
      },
      {
        facebook: "https://www.twitter.com/emmadavis/",
      },
    ],
    languages: [
      {
        name: "English",
        level: "fluent",
      },
      {
        name: "Spanish",
        level: "intermediate",
      },
    ],
    recommendations: 6,
    status: "approved",
    active: true,
    viewsCount: 0,
    earning: 0,
    visibility: "visible",
    joinDate: "June 20, 2018",
  },
];