import { Link } from 'react-router-dom';
import './WeekSpecials.css';
import links from '../../../utils/links';
import MealCard from './MealCard';
import meals from '../../../utils/meals';

const mealsArr = meals;

const WeekSpecials = () => {
    return (
      <section className="container grid week-specials">
        <div className="week-specials-header">
          <h2>This week specials!</h2>
          <Link className="button-primary" to={links.get('orderOnline').path}>
            Online Menu
          </Link>
        </div>
        {mealsArr.map((meal, index) => 
          <MealCard key={index} meal={meal} />
        )}
      </section>
    );
  };
  
  export default WeekSpecials;