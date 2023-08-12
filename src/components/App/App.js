import './App.css';
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRouteElement from '../ProtrectedRoute/ProtectedRoute';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import PageNotFound from '../PageNotFound/PageNotFound';
import * as MainApi from '../../utils/MainApi';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [tooltipInfo, setTooltipInfo] = React.useState({})
  const [openTooltip, setOpenTooltip] = React.useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      MainApi
        .checkToken(jwt)
        .then((userInfo) => {
          if (userInfo) {
            setLoggedIn(true);
          };
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      MainApi.getUserInfo()
        .then((profileInfo) => {
          setCurrentUser({
            ...currentUser,
            ...profileInfo,
          });
        })
        .catch((err) => {
          console.log(err);
        });

        MainApi.getMoviesCards().then((res) => {
          setCards(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  const handleEditProfile = (name, email) => {
    if (!name || !email) {
      return;
    }

    return MainApi.editProfile(name, email).then(() => {
      setCurrentUser({
        ...currentUser,
        name, 
        email,
      });
    });
  }

  const handleLogin = () => {
    setLoggedIn({
      loggedIn: true,
    });
  };

  const handleSignOutButtonClick = () => {
    localStorage.clear();
  }

  const handleLoginSubmit = (formValue) => {
    if (!formValue.email.value || !formValue.password.value) {
      return;
    }
    MainApi
      .authorize(formValue.email.value, formValue.password.value)
      .then((data) => {
        console.log(data);
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          handleLogin();
          navigate('/movies', {replace: true});
        }
      })
      .catch((err) => console.log(err));
  };

  const handleRegisterSubmit = (formValue) => {
    if (!formValue.email.value || !formValue.password.value || !formValue.name.value) {
      return;
    }
    MainApi
      .register(formValue.name.value, formValue.email.value, formValue.password.value)
              .then((res) => {
                setOpenTooltip(!openTooltip);
                setTooltipInfo(true);
                navigate('/signin', {replace: true});
              })
              .catch((err) => {
                setTooltipInfo(false);
                console.log(err);
              });

  }

  const closeTooltip = () => {
    setOpenTooltip(false);
  }

  const handleDeleteMovieCard = (card) => {
    MainApi
      .deleteMovieCard(card._id)
      .then(() => {
        setCards((state) => state.filter((item) => card._id !== item._id));
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <main className='content'>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/movies' element={
              <ProtectedRouteElement
                loggedIn={loggedIn}
                element={Movies}
              />
              }
            />
            <Route path='/saved-movies' element={
              <ProtectedRouteElement 
                element={SavedMovies}
                loggedIn={loggedIn}
                onDeleteMovieCard={handleDeleteMovieCard}
              />
            } 
            />
            <Route path='/profile' element={
              <ProtectedRouteElement 
                element={Profile}
                loggedIn={loggedIn}
                signOut={handleSignOutButtonClick}
                onUpdateUser={handleEditProfile}
              />
            }
            />
            <Route path='/signin' element={<Login handleLoginSubmit={handleLoginSubmit} loggedIn={loggedIn} />} />
            <Route path='/signup' element={<Register handleRegisterSubmit={handleRegisterSubmit} loggedIn={loggedIn} />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
          <InfoTooltip 
            isOpen={openTooltip}
            onClose={closeTooltip}
            isSuccess={tooltipInfo}
          />
        </main>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
