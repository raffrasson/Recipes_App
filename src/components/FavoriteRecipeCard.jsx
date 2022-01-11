import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import shareIcon from '../images/shareIcon.svg';
import likeIcon from '../images/blackHeartIcon.svg';

function FavoriteRecipeCard(props) {
  const { type, index, id, alcoholicOrNot, img, foodName, category,
    area, date } = props;
  const { favorites, setFavorites, copy } = useContext(AppContext);

  return (
    <div className="col-md-3 mb-2">
      <div className="card">
        <a href={ `/${type}s/${id}` }>
          <img
            className="card-img-top"
            src={ img }
            alt={ `${foodName}` }
            data-testid={ `${index}-horizontal-image` }
          />
        </a>
        <div className="card-body text-center">

          <a href={ `/${type}s/${id}` }>
            <h5
              data-testid={ `${index}-horizontal-name` }
              className="card-title"
            >
              {foodName}

            </h5>
          </a>
        </div>
        <p
          className="card-text"
          data-testid={ `${index}-horizontal-top-text` }
        >
          {area}
          {' '}
          -
          {' '}
          {category}
          {alcoholicOrNot}
        </p>

        <p data-testid={ `${index}-horizontal-area` }>{area}</p>

        <p data-testid={ `${index}-horizontal-done-date` }>{date}</p>

        <button
          className="btn btn-danger w-50"
          type="button"
          id="share"
          data-testid={ `${index}-horizontal-share-btn` }
          src="src/images/shareIcon.svg"
          alt="compartilhar"
          onClick={ () => {
            copy((`http://localhost:3000/${type}s/${id}`)); // ref: https://stackoverflow.com/questions/49618618/copy-current-url-to-clipboard
            document.getElementById('share').innerHTML = 'Link copiado!';
          } }
        >
          <img src={ shareIcon } alt="compartilhar" />
        </button>

        <button
          className="btn btn-danger w-50"
          type="button"
          data-testid={ `${index}-horizontal-favorite-btn` }
          src="src/images/blackHeartIcon.svg"
          alt="favoritar"
          onClick={ () => {
            setFavorites([]);
            window.localStorage.removeItem('favoriteRecipes');
            const newArray = favorites.filter((elem) => elem !== favorites[index]);
            window.localStorage.setItem('favoriteRecipes', JSON.stringify(newArray));
            setFavorites(newArray);
          } }
        >
          <img src={ likeIcon } alt="compartilhar" />
        </button>
      </div>
    </div>
  );
}

FavoriteRecipeCard.propTypes = {
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
  foodName: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,

};

export default FavoriteRecipeCard;
