import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./MealCard.css";
import links from "../../../utils/links";

const MealCard = ({meal}) => {
    return (
        <article className="meal-card">
            <div className="meal-card-img">
                <img src={meal.image} alt={meal.name} />
            </div>
            <div className="meal-card-header">
                <h1>{meal.name}</h1>
                <span>{meal.price}</span>
            </div>
            <div className="meal-card-body-footer">
                <p>{meal.description}</p>
                <Link to={links.get('orderOnline').path}>
                    Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
                </Link>
            </div>
        </article>
    )
}

export default MealCard;