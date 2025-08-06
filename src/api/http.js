import axios from 'axios';

function create(baseURL, options) {
  // assign 은 두개의 객체를 머지하는 메서드
  const instance = axios.create(Object.assign({ baseURL }), options);
  return instance;
}
console.log(
  'import.meta.env.VITE_API_BASE_URL',
  import.meta.env.VITE_API_BASE_URL,
);

export const canvases = create(
  `${import.meta.env.VITE_API_BASE_URL}/canvases/`,
);
