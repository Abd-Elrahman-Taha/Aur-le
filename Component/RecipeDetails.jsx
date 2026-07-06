import { useParams, Link } from "react-router-dom";

export default function RecipeDetails({ food }) {
  const { id } = useParams();
  const recipe = food.find((item) => item.id === parseInt(id));

  return (
    <div className="recipe-details-container">
      <div className="recipe-box">
        <h1>{recipe.name}</h1>
        <img
          src={recipe.image}
          alt={recipe.name}
          className="img-fluid"
        />
        <p className="lead">{recipe.description}</p>
        <hr />
        <h4>Full Recipe:</h4>
        <p className="mt-3">{recipe.recipe}</p>

        <Link to="/recipes">
          <button className="btn btn-secondary mt-4">Back to Recipes</button>
        </Link>
      </div>
    </div>
  );
}
