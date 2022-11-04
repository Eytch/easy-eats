import Card from './styles/Card.styled';
import GridContainerMain from './styles/GridContainerMain.styled';
import noImage from '../assets/images/no-image.png';
import { Link } from 'react-router-dom';

function MealsGrid(props) {
  const recipes = props.recipes;
  const cardsElements = recipes.map((item) => {
    return (
      <div className='main--grid' key={item.id}>
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
      </div>
    );
  });

  return (
    <GridContainerMain>
      <h3 className='Grid--title'>{props.title}</h3>
      <hr className='title--line' />
      <div className='main--grid'>{cardsElements}</div>
    </GridContainerMain>
  );
}

export default MealsGrid;
