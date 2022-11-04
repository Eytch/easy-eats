import React, { useEffect, useState } from 'react';
import Container from '../styles/Container.styled';
import Header from '../Header';
import CardsGrid from '../CardsGrid';

const API_KEY = process.env.REACT_APP_API_KEY;

export default function Home() {
  const [randoms, setRandoms] = useState([]);
  const [italians, setItalians] = useState([]);
  const [indians, setIndians] = useState([]);

  // FETCHING RANDOMS API
  useEffect(() => {
    const getRandoms = async () => {
      const check = localStorage.getItem('randoms');
      if (check) {
        setRandoms(JSON.parse(check));
      } else {
        const res = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=10`,
          { mode: 'cors' }
        );
        const data = await res.json();

        localStorage.setItem('randoms', JSON.stringify(data.recipes));
        setRandoms(data.recipes);
      }
    };
    getRandoms();
  }, []);

  // FETCHING ITALIANS API
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

  // FETCHING INDIANS API
  useEffect(() => {
    const getIndians = async () => {
      const check = localStorage.getItem('indians');
      if (check) {
        setIndians(JSON.parse(check));
      } else {
        const res = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=indian`,
          { mode: 'cors' }
        );
        const data = await res.json();

        localStorage.setItem('indians', JSON.stringify(data.results));
        setIndians(data.results);
      }
    };

    getIndians();
  }, []);

  return (
    <Container>
      <Header />
      <CardsGrid title={'Random'} recipes={randoms} />
      <CardsGrid title={'Italian'} recipes={italians} />
      <CardsGrid title={'Indian'} recipes={indians} />
    </Container>
  );
}
