import axios from 'axios';

const API = 'd0b1d43b-a7b4-4827-807f-2ef3583fd7a2';

export const request = async (location) => {
  const result = await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=${API}&format=json&geocode=${location}`)
  return result;
};
