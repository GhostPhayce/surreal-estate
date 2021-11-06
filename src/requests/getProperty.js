const axios = require("axios").default;

const getProperty = (setProperties) => {
  const endpoint = "http://localhost:4000/api/v1/PropertyListing/";

  axios.get(endpoint).then(({ data }) => setProperties(data));
};

export default getProperty;
