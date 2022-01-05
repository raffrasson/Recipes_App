import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

function FinishedRecipeCard(props) {
  const { type, index, id, alcoholicOrNot, img, foodName, category,
    area, date, tagName, tagName2 } = props;
  const { copy } = useContext(AppContext);
  return (
    <>
      <a href={ `/${type}s/${id}` }>
        <img
          src={ img }
          alt=""
          width="150"
          data-testid={ `${index}-horizontal-image` }
        />
      </a>
      <a href={ `/${type}s/${id}` }>
        <h4 data-testid={ `${index}-horizontal-name` }>{foodName}</h4>
      </a>
      <h4 data-testid={ `${index}-horizontal-top-text` }>
        {area}
        {' '}
        -
        {' '}
        {category}
        {' '}
        -
        {' '}
        {alcoholicOrNot}
      </h4>
      <h4 data-testid={ `${index}-horizontal-done-date` }>{date}</h4>
      <h4 data-testid={ `${index}-${tagName}-horizontal-tag` }>{tagName}</h4>
      <h4 data-testid={ `${index}-${tagName2}-horizontal-tag` }>{tagName2}</h4>
      <button
        type="button"
        id="share"
        data-testid={ `${index}-horizontal-share-btn` }
        src="src/images/sgithareIcon.svg"
        alt="compartilhar"
        onClick={ () => {
          copy((`http://localhost:3000/${type}s/${id}`)); // ref: https://stackoverflow.com/questions/49618618/copy-current-url-to-clipboard
          document.getElementById('share').innerHTML = 'Link copiado!';
        } }
      />
    </>
  );
}

FinishedRecipeCard.propTypes = {
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
  foodName: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tagName: PropTypes.string.isRequired,
  tagName2: PropTypes.string.isRequired,
};

export default FinishedRecipeCard;
