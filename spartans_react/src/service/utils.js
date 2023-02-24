const objectToQueryString = (obj) =>
  Object.keys(obj)
    .map((key) => key + "=" + obj[key])
    .join("&");

export const fetchEnhanced = async ({ url, params, method = "GET" }) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": process.env.REACT_APP_API_KEY,
    }
  };

  if (params) {
    if (method === "GET") {
      url += "?" + objectToQueryString(params);
    } else {
      options.body = JSON.stringify(params);
    }
  }

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/${url}`,
    options
  );

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }

  const result = await response.json();

  return result;
};
