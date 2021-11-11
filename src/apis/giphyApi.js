const API_ENDPOINT = "https://api.giphy.com/v1/gifs";
const API_KEY = "3WEg191x1T1T74IgMKgEIA0Q3gWEHqxa";

const fetchApi = async (url) => {
  const result = await fetch(url);
  switch (result.status) {
    case 200:
      return await result.json();
    case 400:
      console.error("데이터가 없습니다.");
    default:
      console.log("네트워크 오류 발생");
  }
};

const api = {
  searchGif: async (keyword) => {
    return fetchApi(
      `${API_ENDPOINT}/search?api_key=${API_KEY}&q=${keyword}limit=25&offset=0&rating=g&lang=en`
    );
  },
  randomGif: async () => {
    return fetchApi(`${API_ENDPOINT}/random?api_key=${API_KEY}&tag=&rating=g`);
  },
};

export default api;
