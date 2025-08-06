import axios from 'axios';

function create(baseURL, options) {
  // assign 은 두개의 객체를 머지하는 메서드
  const instance = axios.create(Object.assign({ baseURL }), options);
  return instance;
}

export const canvases = create(
  'https://json-server-vercel-psi-seven.vercel.app/canvases',
);
// export const canvases = create('http://localhost:8000/canvases/');
// export const posts = create('http://localhost:8000/posts/');
