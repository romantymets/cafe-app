
const fetchPopularMovies = async(url) => {
  try {
    const response = await fetch(`${url}`, {
      method: "GET",
      redirect: "follow"
    });
    if (!response.ok) {
      throw new Error(`Failed with status code: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export default fetchPopularMovies;
