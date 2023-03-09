import axios from "axios";

async function fetchPopularCategory(url, setPopularCategory) {
  const result = await axios.get(url);
  //   const resultJSON = await result.json();
  //   console.log(result.data);
  setPopularCategory(result.data);
  //   return result;
}

export default fetchPopularCategory;
