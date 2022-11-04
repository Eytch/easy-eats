import React, { useEffect, useState } from 'react';
import Wrapper from '../styles/Wrapper.styled';
import { useParams } from 'react-router-dom';
import noImg from '../../assets/images/no-image.png';
import CardsGrid from '../CardsGrid';
import Container from '../styles/Container.styled';

export default function Recipes() {
  let { id } = useParams();
  const [details, setDetails] = useState({});
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const getRecipe = async () => {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`,
        { mode: 'cors' }
      );
      const details = await res.json();
      setDetails(details);
    };
    getRecipe();
  }, [id]);

  console.log(details);

  const [Similar, setSimilar] = useState([]);

  // FETCHING RANDOMS API
  useEffect(() => {
    const getSimilars = async () => {
      const check = localStorage.getItem('randoms');
      if (check) {
        setSimilar(JSON.parse(check));
      } else {
        const res = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=10`,
          { mode: 'cors' }
        );
        const data = await res.json();

        localStorage.setItem('randoms', JSON.stringify(data.recipes));
        setSimilar(data.recipes);
      }
    };
    getSimilars();
  }, []);

  return (
    <Wrapper>
      <div className='recipe--cover'>
        <h2 className='cover--name'>{details.title}</h2>
        <img src={details.image ? details.image : noImg} alt={details.title} />
      </div>

      <div className='recipe--info'>
        <div className='recipe--instructions'>
          <h3 className='recipe--name'>Instructions</h3>
          <hr className='title--line' />

          <p
            className='instructions--details'
            dangerouslySetInnerHTML={{ __html: details.instructions }}
          ></p>
        </div>
        <div className='recipe--ingredients'>
          <h3 className='recipe--name'>Ingredients</h3>
          <hr className='title--line' />
          <ul className='ingredients--details'>
            {details.extendedIngredients ? (
              details.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))
            ) : (
              <li>Fetching Data...</li>
            )}
          </ul>
        </div>
      </div>

      <Container>
        <CardsGrid title={'Similar'} recipes={Similar} />
      </Container>
    </Wrapper>
  );
}
