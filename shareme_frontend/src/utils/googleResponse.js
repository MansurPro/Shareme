import axios from 'axios';
import jwt_decode from "jwt-decode";

export const createOrGetUser = async (response) => {
  const { name, picture, sub } = jwt_decode(response.credential);
  console.log(name);
  console.log(picture);
  console.log(sub);

  const doc = {
    _id: sub,
    _type: 'user',
    userName: name,
    image: picture,
  }
};