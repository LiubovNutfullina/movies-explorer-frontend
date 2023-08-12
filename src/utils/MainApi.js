const BASE_URL = "https://domainnutfullina.students.nomoredomains.rocks";

export const register = async (name, email, password) => {
  try {
    const res = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    return checkResponse(res);
  } catch (err) {
    return console.log(err);
  }
};

export const checkToken = async (token) => {
  try {
    const res = await fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return checkResponse(res);
  } catch (err) {
    return console.log(err);
  }
};

export const authorize = async (email, password) => {
  try {
    const res = await fetch(`${BASE_URL}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return checkResponse(res);
  } catch (err) {
    return console.log(err);
  }
};

export const getUserInfo = async () => {
  try {
    const res = await fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
    return checkResponse(res);
  } catch (err) {
    return console.log(err);
  }
};

export const editProfile = async (name, email) => {
  try {
    const res = await fetch(`${BASE_URL}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    });
    return checkResponse(res);
  } catch (err) {
    return console.log(err);
  }
}

export const getMoviesCards = async () => {
  try {
    const res = await fetch(`${BASE_URL}/movies`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
    return checkResponse(res);
  } catch (err) {
    return console.log(err);
  }
}

export const addNewSavedMovieCard = async (
  country,
  director,
  duration,
  year,
  description,
  image,
  trailerLink,
  thumbnail,
  movieId,
  nameRU,
  nameEN
) => {
  try {
    const res = await fetch(`${BASE_URL}/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({
        country: country,
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: image,
        trailerLink: trailerLink,
        thumbnail: thumbnail,
        movieId: movieId,
        nameRU: nameRU,
        nameEN: nameEN,
      }),
    });
    return checkResponse(res);
  } catch (err) {
    return console.log(err);
  }
}

export const deleteMovieCard = async (movieCardId) => {
    try {
    const res = await fetch(`${BASE_URL}/movies/${movieCardId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
    return checkResponse(res);
  } catch (err) {
    return console.log(err);
  }
};


export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}
