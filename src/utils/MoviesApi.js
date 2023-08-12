import { checkResponse } from "./MainApi";

export const BASE_URL = 'https://api.nomoreparties.co';

export const getMoviesCards = async () => {
  try {
    const res = await fetch(`${BASE_URL}/beatfilm-movies`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return checkResponse(res);
  } catch (err) {
    return console.log(err);
  }
}
