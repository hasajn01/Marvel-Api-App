import CryptoJS from "crypto-js";
import axios from "axios";

const ts = new Date().getTime();
const privateKey = "5548f83432850e496dcc583681ab628da7026001";
const publicKey = "580024c23489242e0832149dbca752bf";

const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

export const getData = async (type, limit) => {
  const url = `https://gateway.marvel.com/v1/public/${type}?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${limit}`;
  try {
    const response = await axios.get(url);
    return response.data.data.results;
  } catch (error) {
    console.log(error);
  }
};
