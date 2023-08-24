const { reviewCollection } = require("../collections/collection");

const data = [
  {
    companyName: "Turing",
    companyImage:
      "https://media.licdn.com/dms/image/D4D0BAQHB79AE71th8A/company-logo_200_200/0/1688472201106?e=1699488000&v=beta&t=0d0PUBEZaz9eBjh_n89dzoR-TV9T5LZFBOUERFA_2jw",
    recommenderImage: "https://i.ibb.co/6gPj1nr/customer-1.png",
    recommenderName: "Alexandra Thompson",
    recommenderPosition: "CEO",
    comment:
      "At TechGlobe, we have had the pleasure of working with the exceptional talents sourced by HireWave. Their dedication greatly impressed us.",
    date: "21 January, 2023",
    rating: 4.7,
  },
  {
    companyName: "FestiVibe",
    companyImage:
      "https://media.licdn.com/dms/image/C4D0BAQHeFujxmFBRzw/company-logo_200_200/0/1658302690386?e=1699488000&v=beta&t=-x95WfW5pFwUx_IjDzaHwJjb-vgipHRVcHJDKVZym-A",
    recommenderName: "Michael Rodriguez",
    recommenderImage: "https://i.ibb.co/C23DwmC/customer-2.png",
    recommenderPosition: "Creative Director",
    comment:
      "HireWave consistently delivers remarkable designers. Their deep understanding of our industry has delivered success to our team.",
    date: "05 March, 2023",
    rating: 4.2,
  },
  {
    companyName: "La Meridian",
    companyImage:
      "https://media.licdn.com/dms/image/C4E0BAQFakt8VoVE7Bg/company-logo_200_200/0/1553560365823?e=1699488000&v=beta&t=W0ykUhy5ZRr8x70XOxXad2BJO1nqeCyuZK7QdMrsW8A",
    recommenderName: "Juan Chen",
    recommenderImage: "https://i.ibb.co/b32wRhT/customer-3.png",
    recommenderPosition: "Head of Culinary Operations",
    comment:
      "Partnering with HireWave has been a game-changer. For anyone searching for culinary brilliance, CulinaryConnections is the agency you need.",
    date: "20 February, 2023",
    rating: 4.1,
  },
  {
    companyName: "Green tech",
    companyImage:
      "https://media.licdn.com/dms/image/C560BAQEpYS5mr8i0rQ/company-logo_200_200/0/1582549520990?e=1699488000&v=beta&t=J6U4g3kGOgL-p0hfHMC-61BDYffLo74ubtK84nQwIUg",
    recommenderName: "Jonathan Parker",
    recommenderImage: "https://i.ibb.co/QnB7nyK/customer-4.png",
    recommenderPosition: "Sustainability Director",
    comment:
      "HireWave Agency consistently presents candidates who align with our mission. If you're serious about sustainability, here is the partner to collaborate with.",
    date: "16 April, 2023",
    rating: 4.9,
  },
];


const insertReview = async (req, res, next) => {
  try {
    const result = await reviewCollection.insertMany(data); // todo: insertMany -> insert
    return await res.status(200).send({
      message: "insert data successful  ✅",
      data: result,
    });
  } catch (error) {
    next(error?.message);
  }
};

const getReviews = async (req, res, next) => {
  try {
    const result = await reviewCollection.find({});
    return await res.status(200).send({
      message: "Get All Reviews Successful ✅",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};


module.exports = { getReviews, insertReview };