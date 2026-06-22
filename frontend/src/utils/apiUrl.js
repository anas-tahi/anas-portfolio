// Get API URL for image paths
const getApiUrl = () => {
  return process.env.NODE_ENV === "production" 
    ? "https://anas-portfolio-jje3.onrender.com" 
    : "http://localhost:4000";
};

export default getApiUrl;
