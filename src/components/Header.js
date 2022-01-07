import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import AppContext from '../context/AppContext';

function Header() {
  const { setSearch } = useContext(AppContext);
  const history = useHistory();
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [visibleBtn, setVisibleBtn] = useState(true);
  const [title, setTitle] = useState(location.pathname);

  const toUpperCase = (str) => (
    str[0].toUpperCase() + str.slice(1).toLowerCase()
  );

  const handleTitle = () => {
    const three = 3;
    const getTitle = location.pathname.substring(1);
    let splitedTitle = [];
    if (getTitle.includes('receitas')) {
      splitedTitle = getTitle.split('-');
    } else {
      splitedTitle = getTitle.split('/');
    }

    if (splitedTitle.length < three) {
      const cleanTitle = splitedTitle.map((str) => (
        toUpperCase(str)
      ));
      setTitle(cleanTitle.join(' '));
    } else if (splitedTitle[2].includes('area')) {
      setTitle('Explorar Origem');
    } else {
      setTitle('Explorar Ingredientes');
    }
  };

  const handleClick = () => {
    history.push('/perfil');
  };

  const togleSearch = () => (
    !visible ? setVisible(true) : setVisible(false)
  );

  const togleBtn = () => {
    const path = location.pathname;
    if (path.includes('explorar') && !path.includes('area')) {
      setVisibleBtn(false);
    }
    if (path.includes('perfil')) {
      setVisibleBtn(false);
    }
    if (path.includes('receitas')) {
      setVisibleBtn(false);
    }
  };

  useEffect(() => {
    handleTitle();
    togleBtn();
  });

  return (
    <div className="navbar-light bg-danger text-white container-fluid">
      <div className="row">
        <div className="col-md-4">
          <button
            className="btn m-2 rounded-pill"
            type="button"
            onClick={ handleClick }
          >
            <img
              data-testid="profile-top-btn"
              src={ profileIcon }
              alt="profile-icon"

            />
          </button>
        </div>

        <div className="col-md-4 text-center">
          <h1 data-testid="page-title">{ title }</h1>
        </div>

        { visibleBtn && (
          <div className="col-md-4">
            <div className="row justify-content-end">
              <button
                type="button"
                className="btn m-2 rounded-pill"
                onClick={ togleSearch }
              >
                <img
                  data-testid="search-top-btn"
                  src={ searchIcon }
                  alt="search-icon"
                />
              </button>
            </div>
          </div>
        )}

        { visible && (
          <div className="col-12 text-center">
            <input
              type="text"
              data-testid="search-input"
              onChange={ ({ target }) => {
                setSearch(target.value);
              } }
            />
          </div>
        )}
      </div>
    </div>
  );
}
export default Header;
