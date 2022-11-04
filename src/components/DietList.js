import React from 'react';
import StyledMealsList from './styles/MealsList.styled';

function DietList() {
  return (
    <StyledMealsList>
      <ul className='meals--list'>
        <li>Gluten Free</li>
        <li>Ketogenic</li>
        <li>Vegetarian</li>
        <li>Lacto-Vegetarian</li>
        <li>Vegan</li>
      </ul>
    </StyledMealsList>
  );
}

export default DietList;
