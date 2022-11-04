import React, { useEffect, useState } from 'react';
import CuisineList from '../CuisineList';
import Container from '../styles/Container.styled';
import GridContainer from '../styles/GridContainer.styled';
import MealsGrid from '../MealsGrid';

export default function Cuisines() {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [italians, setItalians] = useState([]);
  useEffect(() => {
    const getItalians = async () => {
      const check = localStorage.getItem('italians');
      if (check) {
        setItalians(JSON.parse(check));
      } else {
        const res = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=italian`,
          { mode: 'cors' }
        );
        const data = await res.json();

        localStorage.setItem('italians', JSON.stringify(data.results));
        setItalians(data.results);
      }
    };

    getItalians();
  }, []);
  return (
    <Container>
      <GridContainer>
        <h3 className='Grid--title'>Meals Filter</h3>
        <hr className='title--line' />

        <CuisineList />
      </GridContainer>

      <MealsGrid title={'Italian Meals'} recipes={italians} />
    </Container>
  );
}
