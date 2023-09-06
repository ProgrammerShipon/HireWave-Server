const { default: mongoose } = require("mongoose");

const company = {
  companyDetails: {
    company: "Yassir",
    website: "www.yassir.com",
    logo: "https://media.licdn.com/dms/image/D4D0BAQEQn1pDkyWBxA/company-logo_100_100/0/1689455917226?e=1700092800&v=beta&t=YeBXa66KQDcSic2rDzfPPonoQXaW7ZjwpjqCB89iots",
    companyEmail: "yassir@gmail.com",
    companyBanner: "https://i.ibb.co/0nKR3c1/img-15.jpg",
    about:
      "Based in Palo Alto, CA, Yassir is a trailblazing IT services and consulting company. Our offerings span a broad spectrum of IT Solutions and Services, encompassing dynamic Software Development, strategic IT Consulting, and more. Our accomplished team thrives in diverse domains, notably Cloud Computing, UI/UX Design, Java Development, and DevOps. With innovation as our guiding principle, we empower businesses to embrace the digital future.",
    specialties:
      "Yassir specializes in IT Services, IT Consulting, Software Development, UI/UX Design, Java Development, and DevOps. Our holistic approach delivers transformative solutions that align with industry trends and client objectives.",
    location: "Palo Alto, CA",
    totalRating: "65",
    rating: 4.0,
    industry: "IT Services and IT Consulting",
    openJobs: 33,
  },
  followers: 998,
  recentReview: [
    {
      name: "Oliver Turner",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      location: "Palo Alto, CA",
      rating: 4.2,
      review:
        "Yassir's IT solutions have brought remarkable efficiency to our operations. Great job!",
      date: "Sep 5, 2023",
    },
    {
      name: "Emma White",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
      location: "San Francisco, CA",
      rating: 4.0,
      review:
        "Excellent IT consulting services that have made a significant impact.",
      date: "Aug 31, 2023",
    },
  ],
  joinDate: "aug 16, 2020",
};

const companyDetails = mongoose.Schema({
    company: {
        type: String,
        require: true,
    },
    website: {
        type: String
    },
    logo: {
        type: String,
    },
    companyEmail: {
        type: String,
        require: true,
    },
    companyBanner: {
        type: String,
    },
    about: {
        type: Array,
    },
    specialties: {
        type: Array,
    },
    location: {
        type: String,
    },
    totalRating: {
        type: String,
    },
    rating: {
        type: Number,
    },
    industry: {
        type: String,
    },
    openJobs: {
        type: Number,
    },
})

const recruitersDataModel = new mongoose.Schema({
  companyDetails: companyDetails,
  followers: {
    type: Number,
  },
  recentReview: {
    type: Array,
  },
  joinDate: {
    type: Date,
  },
  profileView: {
    type: Number,
  },
});

module.exports = recruitersDataModel