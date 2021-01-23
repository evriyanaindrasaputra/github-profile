const API_URL = "https://api.github.com";

export default function client(endpoint, { ...customConfig } = {}) {
  const config = {
    method: "GET",
    ...customConfig,
  };

  return window
    .fetch(`${API_URL}${endpoint}`, config)
    .then(async (response) => {
      const data = await response.json();
      return response.ok ? data : Promise.reject(data);
    });
}
