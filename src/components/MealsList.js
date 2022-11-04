import React from 'react';
import StyledMealsList from './styles/MealsList.styled';

function MealsList() {
  return (
    <StyledMealsList>
      <ul className='meals--list'>
        <li>Main Course</li>
        <li>Dessert</li>
        <li>Appetizer</li>
        <li>Salad</li>
        <li>BreakFast</li>
        <li>Soup</li>
        <li>Beverage</li>
        <li>Sauce</li>
        <li>fingerfood</li>
        <li>Snack</li>
      </ul>
    </StyledMealsList>
  );
}

export default MealsList;
