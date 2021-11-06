const axios = require("axios").default;

const postProperty = ({
  title,
  type,
  bedrooms,
  bathrooms,
  price,
  city,
  email,
}) => {
  const endpoint = "http://localhost:4000/api/v1/PropertyListing/";

  return axios.post(endpoint, {
    title,
    type,
    city,
    bedrooms,
    bathrooms,
    email,
    price,
  });
};

export default postProperty;
