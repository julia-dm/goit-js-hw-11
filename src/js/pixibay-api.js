export async function getPicture(query) {
  const API_KEY = '44796717-c9697056d5a7f56baa85540ad';
  const BASE_URL = 'https://pixabay.com/api/';
  const res = await fetch(
    `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
      query
    )}&image_type=photo&orientation=horizontal&safesearch=true`
  );
  if (!res.ok) {
    throw new Error(`Could not fetch ${query}, received ${response.status}`);
  }
  const data = await res.json();
  console.log('API response data:', data);
  return data.hits;
}
