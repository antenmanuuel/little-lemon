import { Link } from 'react-router-dom';
import './index.css';
import links from '../../../utils/links';
import MealCard from '../../pages/Home/MealCard';
import meals from '../../../utils/meals';

const mealsArr = meals;

const Menu = () => {
    return (
      <section className="container grid menu">
        <div className="menu-header">
          <h2>Menu</h2>
          <Link className="button-primary" to={links.get('menu').path}>
            Online Menu
          </Link>
        </div>
        {mealsArr.map((meal, index) => 
          <MealCard key={index} meal={meal} />
        )}
      </section>
    );
  };
  
  export default Menu;