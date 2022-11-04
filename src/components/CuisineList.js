import React from 'react';
import StyledMealsList from './styles/MealsList.styled';

function CuisineList() {
  return (
    <StyledMealsList>
      <ul className='meals--list'>
        <li>American</li>
        <li>Chinese</li>
        <li>French</li>
        <li>Greek</li>
        <li>Italian</li>
        <li>Indian</li>
        <li>Japanese</li>
        <li>Middle Eastern</li>
        <li>Thai</li>
        <li>Spanish</li>
      </ul>
    </StyledMealsList>
  );
}

export default CuisineList;
