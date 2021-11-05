import AxiosOrigin from 'axios';

const axios = AxiosOrigin.create({
  baseURL: 'https://front-test.beta.aviasales.ru',
});

export default axios;
