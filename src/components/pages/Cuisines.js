import React, { useEffect, useState } from 'react';
import CuisineList from '../CuisineList';
import Container from '../styles/Container.styled';
import GridContainer from '../styles/GridContainer.styled';
import MealsGrid from '../MealsGrid';

export default function Cuisines() {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [main, setMain] = useState([]);
  useEffect(() => {
    const getMain = async () => {
      const check = localStorage.getItem('main');
      if (check) {
        setMain(JSON.parse(check));
      } else {
        const res = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=20`,
          { mode: 'cors' }
        );
        const data = await res.json();

        localStorage.setItem('main', JSON.stringify(data.recipes));
        setMain(data.recipes);
      }
    };
    getMain();
  }, []);
  return (
    <Container>
      <GridContainer>
        <h3 className='Grid--title'>Meals Filter</h3>
        <hr className='title--line' />

        <CuisineList />
      </GridContainer>

      <MealsGrid title={'Italian Meals'} recipes={main} />
    </Container>
  );
}
