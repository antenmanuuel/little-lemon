import './index.css';
import Meal from './Meal';
import meals from '../../../utils/meals';

const mealsArr = meals;

const Menu = () => {
    return (
      <section className="container grid menu">
        <div className="menu-header">
          <h2>Menu</h2>
        </div>
        {mealsArr.map((meal, index) => 
          <Meal key={index} meal={meal} />
        )}
      </section>
    );
  };
  
  export default Menu;