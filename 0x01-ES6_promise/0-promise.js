export default function getResponseFromApi() {
  return new Promise((resolve, reject) => {
    const api = true;
    if (api) {
      resolve('API response data');
    } else {
      reject(new Error('API response failed'));
    }
  });
}
