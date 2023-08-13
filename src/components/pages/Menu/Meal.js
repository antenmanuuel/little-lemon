import "./Meal";

const Meal = ({meal}) => {
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
            </div>
        </article>
    )
}

export default Meal;