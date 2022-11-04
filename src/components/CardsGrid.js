import Card from './styles/Card.styled';
import GridContainer from './styles/GridContainer.styled';
import noImage from '../assets/images/no-image.png';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

function CardsGrid(props) {
  const recipes = props.recipes;
  const cardsElements = recipes.map((item) => {
    return (
      <SplideSlide key={item.id}>
        <Link to={`/recipes/${item.id}`} className='cards--links'>
          <Card>
            <div className='img--container'>
              <img
                src={item.image ? item.image : noImage}
                className='Card--image'
                alt=''
              />
            </div>
            <span className='Card--name'>{item.title}</span>
          </Card>
        </Link>
      </SplideSlide>
    );
  });

  return (
    <GridContainer>
      <h3 className='Grid--title'>{props.title} Picks</h3>
      <hr className='title--line' />

      <Splide
        options={{
          perPage: 5,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '2rem',
          breakpoints: {
            2560: {
              perPage: 5,
              gap: '2rem',
            },
            1200: {
              perPage: 4,
              gap: '1.5rem',
            },
            970: {
              perPage: 3,
              gap: '1.5rem',
            },
            500: {
              perPage: 2,
              gap: '1rem',
            },
          },
        }}
      >
        {cardsElements}
      </Splide>
    </GridContainer>
  );
}

export default CardsGrid;
