import { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [responses, setResponses] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setResponses(data));
  }, []);
  return responses;
};

export default UseFetch;
